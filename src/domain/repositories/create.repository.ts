// Dominio não pode chamar infra --
import { StateMapper } from "src/infra/repositories/typeorm/mapper/state.mapper"
import { CityMapper } from "src/infra/repositories/typeorm/mapper/city.mapper"
import { DistrictMapper } from "src/infra/repositories/typeorm/mapper/district.mapper"

export interface ICreateRepositoy {
  execute(data: ICreateRepositoy.Params): Promise<boolean>
}

export namespace ICreateRepositoy {
  export interface Params {
    data: StateMapper | CityMapper | DistrictMapper
  }
}
