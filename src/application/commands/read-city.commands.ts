import { Injectable } from "@nestjs/common"
import { ReadCityParamsDTO } from "src/domain/dto/read-city.dto"
import { CityEntity } from "src/domain/entities/city.entity"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { StateEntity } from "src/domain/entities/state.entity"
import { IReadCityRepository } from "src/domain/repositories/read-city.repository"
import { ReadCityRepository } from "src/infra/repositories/typeorm/read-city.repository"

@Injectable()
export class ReadCityCommand {
  constructor(private readonly readCityRepository: ReadCityRepository) {}

  async execute(params: ReadCityParamsDTO) {
    const data = await this.readCityRepository.execute({
      id: params.id
    })

    if (!data) {
      return false
    }

    return new StateEntity().create({
      id: data.state.id,
      name: data.state.name,
      cities: new CityEntity().create({
        id: data.id,
        name: data.name,
        districts: data.district.map((district) => {
          return new DistrictEntity().create({
            id: district.id,
            name: district.name
          })
        })
      })
    })
  }
}

export namespace ReadCityCommand {
  export type Params = CityEntity.Read
}
