import { Injectable } from "@nestjs/common"
import {
  UpdateCityBodyDTO,
  UpdateCityParamsDTO
} from "src/domain/dto/update-city.dto"
import { CityEntity } from "src/domain/entities/city.entity"
import { IUpdateCityRepository } from "src/domain/repositories/update-city.repository"
import { UpdateCityRepository } from "src/infra/repositories/typeorm/update-city.repository"

@Injectable()
export class UpdateCityCommand {
  constructor(private readonly updateCityRepository: UpdateCityRepository) {}

  async execute(query: UpdateCityParamsDTO, body: UpdateCityBodyDTO) {
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
