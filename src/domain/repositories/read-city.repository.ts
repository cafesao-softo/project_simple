import { CityMapper } from "src/infra/repositories/typeorm/mapper/city.mapper"

export interface IReadCityRepository {
  execute(params: IReadCityRepository.Params): Promise<CityMapper>
}

export namespace IReadCityRepository {
  export interface Params {
    id: string
  }
}
