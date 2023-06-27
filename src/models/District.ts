import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from "typeorm"
import { StateModel } from "./State"
import { CityModel } from "./City"

@Entity()
export class DistrictModel {
  @PrimaryGeneratedColumn({
    type: "integer"
  })
  id?: number

  @Column()
  name: string

  @OneToOne(() => StateModel, {
    cascade: true
  })
  @JoinColumn()
  state: StateModel

  @OneToOne(() => CityModel, {
    cascade: true
  })
  @JoinColumn()
  city: CityModel
}
