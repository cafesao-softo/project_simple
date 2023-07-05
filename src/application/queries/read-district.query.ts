import { Injectable } from "@nestjs/common"
import { IReadDistrictParamsDTO } from "src/domain/dto/read-district.dto"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { IDistrictRepository } from "src/domain/repositories/district.repository"

@Injectable()
export class ReadDistrictQuery {
  constructor(private readonly districtRepository: IDistrictRepository) {}

  async execute(params: IReadDistrictParamsDTO) {
    const data = await this.districtRepository.findOne({
      id: params.id
    })

    if (!data) {
      return false
    }

    return data
  }
}

export namespace ReadDistrictQuery {
  export type Params = DistrictEntity.Read
}
