import { DistrictEntity } from "src/domain/entities/district.entity"

export interface IReadDistrictQuery {
  execute(params: IReadDistrictQuery.Params): Promise<DistrictEntity | false>
}

export namespace IReadDistrictQuery {
  export type Params = DistrictEntity.Read
}
