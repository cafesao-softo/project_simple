import { DistrictEntity } from "src/domain/entities/district.entity"

export interface ICreateDistrictCommand {
  execute(params: ICreateDistrictCommand.Params): Promise<DistrictEntity>
}

export namespace ICreateDistrictCommand {
  export type Params = Partial<DistrictEntity.Create>
}
