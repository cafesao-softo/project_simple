import { CityEntity } from "src/domain/entities/city.entity"

export interface IUpdateCityCommand {
  execute(params: IUpdateCityCommand.Params): Promise<boolean>
}

export namespace IUpdateCityCommand {
  export type Params = {
    query: CityEntity.UpdateQuery
    body: CityEntity.UpdateBody
  }
}
