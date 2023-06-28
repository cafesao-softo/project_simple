import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne
} from "typeorm"
import { CityModel } from "./City"

@Entity()
export class DistrictModel {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string

  @ManyToOne(() => CityModel, (CityModel) => CityModel.district)
  @JoinColumn()
  city?: CityModel
}
