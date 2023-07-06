import { DistrictEntity } from "src/domain/entities/district.entity"

export interface IUpdateDistrictCommand {
  execute(params: IUpdateDistrictCommand.Params): Promise<boolean>
}

export namespace IUpdateDistrictCommand {
  export type Params = {
    query: DistrictEntity.UpdateQuery
    body: DistrictEntity.UpdateBody
  }
}
