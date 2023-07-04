import { StateMapper } from "src/infra/repositories/typeorm/mapper/state.mapper"
import { CityMapper } from "src/infra/repositories/typeorm/mapper/city.mapper"
import { DistrictMapper } from "src/infra/repositories/typeorm/mapper/district.mapper"

export interface ICreateRepositoy {
  execute(data: StateMapper | CityMapper | DistrictMapper): Promise<boolean>
}
