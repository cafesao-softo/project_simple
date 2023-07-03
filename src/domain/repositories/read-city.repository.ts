import { CityEntity } from "../entities/city.entity"

export interface IReadCityRepository {
  execute(params: IReadCityRepository.Params): Promise<CityEntity>
}

export namespace IReadCityRepository {
  export interface Params {
    id: string
  }
}
