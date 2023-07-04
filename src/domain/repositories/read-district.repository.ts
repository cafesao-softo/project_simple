import { DistrictMapper } from "src/infra/repositories/typeorm/mapper/district.mapper"

export interface IReadDistrictRepository {
  execute(params: IReadDistrictRepository.Params): Promise<DistrictMapper>
}

export namespace IReadDistrictRepository {
  export interface Params {
    id: string
  }
}
