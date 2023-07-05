import { DistrictEntity } from "src/domain/entities/district.entity"
import { DistrictMapper } from "src/infra/repositories/typeorm/mapper/district.mapper"

export class DistrictAssembler {
  static assembly(input: DistrictAssembler.Input): DistrictEntity {
    if (!input) return new DistrictEntity()
    return new DistrictEntity({
      id: input.id,
      name: input.name,
      cityId: input.city.id
    })
  }
}

export namespace DistrictAssembler {
  export type Input = DistrictMapper
}
