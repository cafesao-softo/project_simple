import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { City } from "../city/city.entity"

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({
    unique: true
  })
  name: string

  @OneToMany(() => City, (City) => City.state)
  city?: City[]
}
