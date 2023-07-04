import { CityEntity } from "src/domain/entities/city.entity"
import { StateEntity } from "src/domain/entities/state.entity"

export interface IReadAllStateQuery {
  execute(): Promise<StateEntity[] | false>
}

export namespace IReadAllStateQuery {
  export type Params = Partial<CityEntity.Create>
}
