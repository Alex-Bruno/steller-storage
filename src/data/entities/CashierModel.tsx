import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('cashiers')
export class CashierModel {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({precision: 2})
  valueOpen: number

  @Column({precision: 2})
  valueClose: number

  @Column({precision: 2})
  valueAjustment: number

  @Column({precision: 2})
  valueTotal: number

  @Column()
  dateOpen: Date

  @Column()
  dateClose: Date
  
  @Column()
  comment: string

  @Column()
  status: boolean

}