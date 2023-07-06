import { CityEntity } from "src/domain/entities/city.entity"

export interface ICreateCityCommand {
  execute(params: ICreateCityCommand.Params): Promise<CityEntity>
}

export namespace ICreateCityCommand {
  export type Params = Partial<CityEntity.Create>
}
