import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
@Entity()
export class CityModel {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string
}
