import { Connection, Repository } from 'typeorm'

import { PaymentTypeModel } from '../entities/PaymentTypeModel'

export default class PaymentTypeRepository {

  private ormRepository: Repository<PaymentTypeModel>

  constructor(connection: Connection) {
    this.ormRepository = connection.getRepository(PaymentTypeModel)
  }

  public async create(data: object): Promise<PaymentTypeModel> {
    const item = this.ormRepository.create({
      ...data,
      enabled: true,
    })
    await this.ormRepository.save(item)

    return item
  }

  public async getAll(): Promise<PaymentTypeModel[]> {
    const items = await this.ormRepository.find({ where: { enabled: true } })

    return items
  }

  public async getAllPagination(take: number, skip: number): Promise<PaymentTypeModel[]> {
    const items = await this.ormRepository.find({
      take,
      skip,
      order: { name: 'ASC' },
    })

    return items
  }

  public async getById(id: number): Promise<PaymentTypeModel> {
    const item = await this.ormRepository.findOne(id)

    return item
  }

  public async getByName(param: string): Promise<PaymentTypeModel> {
    const item = await this.ormRepository.findOne({ where: { name: param } })

    return item
  }

  public async remove(data: object): Promise<PaymentTypeModel> {
    const item = this.ormRepository.create({
      ...data,
      enabled: false,
    })
    await this.ormRepository.save(item)

    return item
  }
}