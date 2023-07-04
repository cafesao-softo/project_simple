import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm"
import { CityMapper } from "./city.mapper"

@Entity()
export class StateMapper {
  @PrimaryColumn()
  id: string

  @Column({
    unique: true
  })
  name: string

  @OneToMany(() => CityMapper, (City) => City.state, {
    onDelete: "CASCADE"
  })
  cities: CityMapper[]
}
