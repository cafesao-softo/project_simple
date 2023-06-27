import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn
} from "typeorm"
import { CityModel } from "./City"

@Entity()
export class StateModel {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string
}
