import { Injectable } from "@nestjs/common"
import {
  IUpdateDistrictBodyDTO,
  IUpdateDistrictParamsDTO
} from "src/domain/dto/update-district.dto"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { UpdateDistrictRepository } from "src/infra/repositories/typeorm/update-district.repository"

@Injectable()
export class UpdateDistrictCommand {
  constructor(
    private readonly updateDistrictRepository: UpdateDistrictRepository
  ) {}

  async execute(query: IUpdateDistrictParamsDTO, body: IUpdateDistrictBodyDTO) {
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
