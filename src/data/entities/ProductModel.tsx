import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class ProductModel {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({unique: true})
  name: string

  @Column()
  description: string

  @Column()
  price: number

  @Column()
  image: string

  @Column({nullable: true, default: ''})
  type: string

  @Column()
  enabled: boolean

}