import { Injectable } from "@nestjs/common"
import { DataSource } from "typeorm"
import { ICreateStateRepositoy } from "src/domain/repositories/create-state.repository"
import { StateEntity } from "src/domain/entities/state.entity"
import { StateMapper } from "./mapper/state.mapper"

@Injectable()
export class CreateStateRepositoy implements ICreateStateRepositoy {
  constructor(private readonly connection: DataSource) {}
  public async execute(data: StateEntity) {
    const repository = this.connection.getRepository(StateMapper)
    const { id, name } = data.getState()
    const cities = data.getState().cities
    await repository.save({
      id,
      name,
      city: cities.map((cityMap) => {
        return {
          id: cityMap.getState().id,
          name: cityMap.getState().name,
          district: cityMap.getState().districts.map((districtMap) => {
            return {
              id: districtMap.getState().id,
              name: districtMap.getState().name
            }
          })
        }
      })
    })
    return true
  }
}
