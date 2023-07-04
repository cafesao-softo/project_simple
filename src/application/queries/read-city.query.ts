import { Inject, Injectable } from "@nestjs/common"
import { IReadCityParamsDTO } from "src/domain/dto/read-city.dto"
import { CityEntity } from "src/domain/entities/city.entity"
import { ICityRepository } from "src/domain/repositories/city.repository"

@Injectable()
export class ReadCityQuery {
  constructor(
    @Inject("CityRepository") private readonly cityRepository: ICityRepository
  ) {}

  async execute(params: IReadCityParamsDTO) {
    const data = await this.cityRepository.findOne({
      id: params.id
    })

    if (!data) {
      return false
    }

    return data
  }
}

export namespace ReadCityQuery {
  export type Params = CityEntity.Read
}
