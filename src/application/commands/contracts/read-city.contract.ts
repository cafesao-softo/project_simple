import { CityEntity } from "src/domain/entities/city.entity"

export interface IReadCityQuery {
  execute(params: IReadCityQuery.Params): Promise<CityEntity | false>
}

export namespace IReadCityQuery {
  export type Params = CityEntity.Read
}
