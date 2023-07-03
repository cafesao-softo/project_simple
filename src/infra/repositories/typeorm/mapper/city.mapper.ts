import { Entity, Column, OneToMany, ManyToOne, PrimaryColumn } from "typeorm"
import { DistrictMapper } from "./district.mapper"
import { StateMapper } from "./state.mapper"

@Entity()
export class CityMapper {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @ManyToOne(() => StateMapper, (State) => State.city, {
    onDelete: "CASCADE"
  })
  state?: StateMapper

  @OneToMany(() => DistrictMapper, (District) => District.city, {
    cascade: true,
    onDelete: "CASCADE"
  })
  district?: DistrictMapper[]
}
