import {
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  DeleteDateColumn
} from "typeorm"
import { CityMapper } from "./city.mapper"

@Entity()
export class DistrictMapper {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  cityId: string

  @DeleteDateColumn()
  deletaAt: Date

  @ManyToOne(() => CityMapper, (City) => City.districts, {
    onDelete: "CASCADE"
  })
  @JoinColumn()
  city?: CityMapper
}
