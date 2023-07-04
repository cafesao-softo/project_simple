import { Injectable } from "@nestjs/common"
import {
  IUpdateCityBodyDTO,
  IUpdateCityParamsDTO
} from "src/domain/dto/update-city.dto"
import { CityEntity } from "src/domain/entities/city.entity"
import { UpdateCityRepository } from "src/infra/repositories/typeorm/update-city.repository"

@Injectable()
export class UpdateCityCommand {
  constructor(private readonly updateCityRepository: UpdateCityRepository) {}

  async execute(query: IUpdateCityParamsDTO, body: IUpdateCityBodyDTO) {
    await this.updateCityRepository.execute(
      {
        id: query.id
      },
      {
        name: body.name
      }
    )
  }
}

export namespace UpdateCityCommand {
  export type Params = {
    query: CityEntity.UpdateQuery
    body: CityEntity.UpdateBody
  }
}
