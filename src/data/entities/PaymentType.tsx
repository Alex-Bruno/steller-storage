import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm"

@Entity('payment_types')
export class PaymentTypeModel {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  enabled: boolean
}