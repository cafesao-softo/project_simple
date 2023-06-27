import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from "typeorm"
import { StateModel } from "./State"

@Entity()
export class CityModel {
  @PrimaryGeneratedColumn({
    type: "integer"
  })
  id: number

  @Column()
  name: string

  @OneToOne(() => StateModel, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    orphanedRowAction: "delete"
  })
  @JoinColumn()
  state: StateModel
}
