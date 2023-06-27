import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class StateModel {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({
    unique: true
  })
  name: string
}
