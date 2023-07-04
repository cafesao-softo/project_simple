import { Injectable } from "@nestjs/common"
import {
  UpdateDistrictBodyDTO,
  UpdateDistrictParamsDTO
} from "src/domain/dto/update-district.dto"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { IUpdateDistrictRepository } from "src/domain/repositories/update-district.repository"
import { UpdateDistrictRepository } from "src/infra/repositories/typeorm/update-district.repository"

@Injectable()
export class UpdateDistrictCommand {
  constructor(
    private readonly updateDistrictRepository: UpdateDistrictRepository
  ) {}

  async execute(query: UpdateDistrictParamsDTO, body: UpdateDistrictBodyDTO) {
    await this.updateDistrictRepository.execute(
      {
        id: query.id
      },
      {
        name: body.name
      }
    )
  }
}

export namespace UpdateDistrictCommand {
  export type Params = {
    query: DistrictEntity.UpdateQuery
    body: DistrictEntity.UpdateBody
  }
}
