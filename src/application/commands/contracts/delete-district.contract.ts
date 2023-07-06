import { DistrictEntity } from "src/domain/entities/district.entity"

export interface IDeleteDistrictCommand {
  execute(params: IDeleteDistrictCommand.Params): Promise<boolean>
}

export namespace IDeleteDistrictCommand {
  export type Params = Partial<DistrictEntity.Delete>
}
