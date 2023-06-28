import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { CityModel } from "./City"

@Entity()
export class StateModel {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({
    unique: true
  })
  name: string

  @OneToMany(() => CityModel, (CityModel) => CityModel.state)
  city?: CityModel[]
}
