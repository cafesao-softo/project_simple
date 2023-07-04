import { Injectable } from "@nestjs/common"
import { IReadCityParamsDTO } from "src/domain/dto/read-city.dto"
import { CityEntity } from "src/domain/entities/city.entity"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { StateEntity } from "src/domain/entities/state.entity"
import { ReadCityRepository } from "src/infra/repositories/typeorm/read-city.repository"

@Injectable()
export class ReadCityQuery {
  constructor(private readonly readCityRepository: ReadCityRepository) {}

  async execute(params: IReadCityParamsDTO) {
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

export namespace ReadCityQuery {
  export type Params = CityEntity.Read
}
