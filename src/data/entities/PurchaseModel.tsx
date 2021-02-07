import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import { PaymentTypeModel } from './PaymentType'
import { CashierModel } from './CashierModel'
import { ProductModel } from './ProductModel'

@Entity('purchases')
export class PurchaseModel {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  clientName: string

  @Column()
  table: string

  @ManyToOne(() => PaymentTypeModel, paymentType => paymentType.purchases)
  paymentType: PaymentTypeModel;

  @ManyToOne(() => CashierModel, cashier => cashier.purchases)
  cashier: CashierModel;

  @ManyToMany(() => ProductModel)
  @JoinTable()
  products: ProductModel[];

  @Column({ precision: 2 })
  value: number

  @Column({ precision: 2 })
  discount: number

  @Column()
  created: Date

  @Column()
  comment: string

  @Column()
  status: boolean
}