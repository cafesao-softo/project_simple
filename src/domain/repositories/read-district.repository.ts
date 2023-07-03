import { DistrictEntity } from "../entities/district.entity"

export interface IReadDistrictRepository {
  execute(params: IReadDistrictRepository.Params): Promise<DistrictEntity>
}

export namespace IReadDistrictRepository {
  export interface Params {
    id: string
  }
}
