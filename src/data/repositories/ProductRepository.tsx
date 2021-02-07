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
    const products = await this.ormRepository.find({where: { enabled: true }})

    return products
  }

  public async getAllPagination(take: number, skip: number): Promise<ProductModel[]> {
    const products = await this.ormRepository.find({
      where: { enabled: true },
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

  public async remove(data: object): Promise<ProductModel> {
    const product = this.ormRepository.create({
      ...data,
      enabled: false,
    })
    await this.ormRepository.save(product)
    
    return product
  }
}