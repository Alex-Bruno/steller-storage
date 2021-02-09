import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('cashiers')
export class CashierModel {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ precision: 2, nullable: false, default: 0 })
  valueOpen: number

  @Column({ precision: 2, nullable: true, default: 0 })
  valueClose: number

  @Column({ precision: 2, nullable: true, default: 0 })
  valueAjustment: number

  @Column({ precision: 2, nullable: true, default: 0 })
  valueTotal: number

  @Column()
  dateOpen: Date

  @Column({ nullable: true })
  dateClose: Date

  @Column({ nullable: true, default: '' })
  comment: string

  @Column({ default: 0 })
  status: boolean

}