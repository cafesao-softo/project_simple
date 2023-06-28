import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne
} from "typeorm"
import { City } from "../city/city.entity"

@Entity()
export class District {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string

  @ManyToOne(() => City, (City) => City.district)
  @JoinColumn()
  city?: City
}
