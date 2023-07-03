import { Entity, Column, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { CityMapper } from "./city.mapper"

@Entity()
export class DistrictMapper {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @ManyToOne(() => CityMapper, (City) => City.district, {
    onDelete: "CASCADE"
  })
  @JoinColumn()
  city?: CityMapper
}
