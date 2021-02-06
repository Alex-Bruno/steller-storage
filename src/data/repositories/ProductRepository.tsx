import { Connection, Repository } from 'typeorm'

import { ProductModel } from '../entities/ProductModel'

export default class ProductRepository {

  private ormRepository: Repository<ProductModel>

  constructor(connection: Connection) {
    this.ormRepository = connection.getRepository(ProductModel)
  }

  public async create(data: object): Promise<ProductModel> {
    const product = this.ormRepository.create({
      ...data,
      enabled: true,
    })
    await this.ormRepository.save(product)
    
    return product
  }

  public async getAll(): Promise<ProductModel[]> {
    const products = await this.ormRepository.find()

    return products
  }

  public async getAllPagination(take: number, skip: number): Promise<ProductModel[]> {
    const products = await this.ormRepository.find({
      take,
      skip,
      order: { name: 'ASC' },
    })

    return products
  }

  public async getById(id: number): Promise<ProductModel> {
    const product = await this.ormRepository.findOne(id)

    return product
  }

  public async getByName(param: string): Promise<ProductModel> {
    const product = await this.ormRepository.findOne({ where: { name: param } })

    return product
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id)
  }
}