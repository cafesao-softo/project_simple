import {
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
  DeleteDateColumn
} from "typeorm"
import { CityMapper } from "./city.mapper"

@Entity()
export class StateMapper {
  @PrimaryColumn()
  id: string

  @Column({
    unique: true
  })
  name: string

  @DeleteDateColumn()
  deletaAt: Date

  @OneToMany(() => CityMapper, (City) => City.state, {
    onDelete: "CASCADE"
  })
  cities?: CityMapper[]
}
