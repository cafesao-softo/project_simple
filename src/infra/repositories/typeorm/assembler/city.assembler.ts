import { CityEntity } from "src/domain/entities/city.entity"
import { CityMapper } from "src/infra/repositories/typeorm/mapper/city.mapper"

export class CityAssembler {
  static assembly(input: CityAssembler.Input): CityEntity {
    if (!input) return new CityEntity()
    return new CityEntity({
      id: input.id,
      name: input.name,
      stateId: input.state.id,
      districts: input.districts.map((district) => {
        return {
          id: district.id,
          name: district.name
        }
      })
    })
  }
}

export namespace CityAssembler {
  export type Input = CityMapper
}
