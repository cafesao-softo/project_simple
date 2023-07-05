import { CityEntity } from "src/domain/entities/city.entity"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { StateEntity } from "src/domain/entities/state.entity"
import { StateMapper } from "src/infra/repositories/typeorm/mapper/state.mapper"

export class StateAssembler {
  static assembly(input: StateAssembler.Input): StateEntity {
    if (!input) return new StateEntity()
    return new StateEntity({
      id: input.id,
      name: input.name,
      cities: input.cities.map((city) => {
        return new CityEntity({
          id: city.id,
          name: city.name,
          districts: city.districts.map((district) => {
            return new DistrictEntity({
              id: district.id,
              name: district.name
            })
          })
        })
      })
    })
  }
}

export namespace StateAssembler {
  export type Input = StateMapper
}
