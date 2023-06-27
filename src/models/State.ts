import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class StateModel {
  @PrimaryGeneratedColumn({
    type: "integer"
  })
  id: number

  @Column()
  name: string
}
