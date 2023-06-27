import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable
} from "typeorm"
import { StateModel } from "./State"
import { DistrictModel } from "./District"

@Entity()
export class CityModel {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string
}
