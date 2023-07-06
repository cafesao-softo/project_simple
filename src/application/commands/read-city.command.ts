import { Injectable } from "@nestjs/common"
import { CityEntity } from "src/domain/entities/city.entity"
import { ICityRepository } from "src/domain/repositories/city.repository"
import { IReadCityQuery } from "./contracts/read-city.contract"

@Injectable()
export class ReadCityQuery implements IReadCityQuery {
  constructor(private readonly cityRepository: ICityRepository) {}

  async execute(params: ReadCityQuery.Params) {
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
