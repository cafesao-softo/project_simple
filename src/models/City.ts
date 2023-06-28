import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne
} from "typeorm"
import { DistrictModel } from "./District"
import { StateModel } from "./State"
@Entity()
export class CityModel {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string

  @ManyToOne(() => StateModel, (StateModel) => StateModel.city)
  state?: StateModel

  @OneToMany(() => DistrictModel, (DistrictModel) => DistrictModel.city, {
    cascade: true
  })
  district?: DistrictModel[]
}
