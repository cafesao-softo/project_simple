import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne
} from "typeorm"
import { District } from "../district/district.entity"
import { State } from "../state/state.entity"

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string

  @ManyToOne(() => State, (State) => State.city)
  state?: State

  @OneToMany(() => District, (District) => District.city, {
    cascade: true
  })
  district?: District[]
}
