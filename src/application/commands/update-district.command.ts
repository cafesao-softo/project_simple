import { Injectable } from "@nestjs/common"
import { CityEntity } from "src/domain/entities/city.entity"
import { IDistrictRepository } from "src/domain/repositories/district.repository"
import { IUpdateDistrictCommand } from "./contracts/update-district.contract"

@Injectable()
export class UpdateDistrictCommand implements IUpdateDistrictCommand {
  constructor(private readonly districtRepository: IDistrictRepository) {}

  async execute(params: UpdateDistrictCommand.Params) {
    await this.districtRepository.update(
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

export namespace UpdateDistrictCommand {
  export type Params = {
    query: CityEntity.UpdateQuery
    body: CityEntity.UpdateBody
  }
}
