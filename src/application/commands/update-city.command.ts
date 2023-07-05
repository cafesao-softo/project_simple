import { Inject, Injectable } from "@nestjs/common"
import { CityEntity } from "src/domain/entities/city.entity"
import { ICityRepository } from "src/domain/repositories/city.repository"
import { IUpdateCityCommand } from "./contracts/update-city.contracts"

@Injectable()
export class UpdateCityCommand implements IUpdateCityCommand {
  constructor(private readonly cityRepository: ICityRepository) {}

  async execute(params: UpdateCityCommand.Params) {
    await this.cityRepository.update(
      {
        id: params.query.id
      },
      {
        name: params.body.name
      }
    )
    return true
  }
}

export namespace UpdateCityCommand {
  export type Params = {
    query: CityEntity.UpdateQuery
    body: CityEntity.UpdateBody
  }
}
