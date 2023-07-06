import { CityEntity } from "src/domain/entities/city.entity"

export interface IDeleteCityCommand {
  execute(params: IDeleteCityCommand.Params): Promise<boolean>
}

export namespace IDeleteCityCommand {
  export type Params = Partial<CityEntity.Delete>
}
