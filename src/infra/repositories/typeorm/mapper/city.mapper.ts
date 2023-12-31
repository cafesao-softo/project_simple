import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  PrimaryColumn,
  DeleteDateColumn
} from "typeorm"
import { DistrictMapper } from "./district.mapper"
import { StateMapper } from "./state.mapper"

@Entity()
export class CityMapper {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  stateId: string

  @DeleteDateColumn()
  deletaAt: Date

  @ManyToOne(() => StateMapper, (State) => State.cities, {
    onDelete: "CASCADE"
  })
  state?: StateMapper

  @OneToMany(() => DistrictMapper, (District) => District.city, {
    cascade: true,
    onDelete: "CASCADE"
  })
  districts?: DistrictMapper[]
}
