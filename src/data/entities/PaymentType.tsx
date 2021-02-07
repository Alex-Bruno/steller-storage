import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import {PurchaseModel} from './PurchaseModel'

@Entity('payment_types')
export class PaymentTypeModel {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  enabled: boolean

  @OneToMany(() => PurchaseModel, purchase => purchase.paymentType)
    purchases: PurchaseModel[];
}