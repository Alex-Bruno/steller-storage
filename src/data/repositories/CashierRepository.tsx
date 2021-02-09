import { Connection, Not, Repository } from 'typeorm'

import { CashierModel } from '../entities/CashierModel'

export default class CashierRepository {

  private ormRepository: Repository<CashierModel>

  constructor(connection: Connection) {
    this.ormRepository = connection.getRepository(CashierModel)
  }

  public async create(data: object): Promise<CashierModel> {
    const item = this.ormRepository.create({
      ...data,
    })
    await this.ormRepository.save(item)

    return item
  }

  public async getAll(): Promise<CashierModel[]> {
    const items = await this.ormRepository.find()

    return items
  }

  public async getAllPagination(take: number, skip: number): Promise<CashierModel[]> {
    const items = await this.ormRepository.find({
      take,
      skip,
      order: { dateOpen: 'DESC' },
    })

    return items
  }

  public async getById(id: number): Promise<CashierModel> {
    const item = await this.ormRepository.findOne(id)

    return item
  }

  public async getOpen(): Promise<CashierModel> {
    const item = await this.ormRepository.findOne({
      where: {
        status: false
      }
    })

    return item
  }

}