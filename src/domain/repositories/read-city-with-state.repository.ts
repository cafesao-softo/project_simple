import { StateMapper } from "src/infra/repositories/typeorm/mapper/state.mapper"

export interface IReadCityWithStateRepository {
  execute(params: IReadCityWithStateRepository.Params): Promise<StateMapper>
}

export namespace IReadCityWithStateRepository {
  export interface Params {
    cityName: string
    stateName: string
  }
}
