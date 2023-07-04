import { Injectable } from "@nestjs/common"
import { ReadDistrictParamsDTO } from "src/domain/dto/read-district.dto"
import { CityEntity } from "src/domain/entities/city.entity"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { StateEntity } from "src/domain/entities/state.entity"
import { IReadDistrictRepository } from "src/domain/repositories/read-district.repository"
import { ReadDistrictRepository } from "src/infra/repositories/typeorm/read-district.repository"

@Injectable()
export class ReadDistrictCommand {
  constructor(
    private readonly readDistrictRepository: ReadDistrictRepository
  ) {}

  async execute(params: ReadDistrictParamsDTO) {
    const data = await this.readDistrictRepository.execute({
      id: params.id
    })

    if (!data) {
      return false
    }

    return new StateEntity().create({
      id: data.city.state.id,
      name: data.city.state.name,
      cities: new CityEntity().create({
        id: data.city.id,
        name: data.city.name,
        districts: [
          new DistrictEntity().create({
            id: data.id,
            name: data.name
          })
        ]
      })
    })
  }
}

export namespace ReadDistrictCommand {
  export type Params = DistrictEntity.Read
}
