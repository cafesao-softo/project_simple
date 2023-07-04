import { UUIDManager } from "src/domain/cryptos/uuid"
import { CreateDTO } from "src/domain/dto/create.dto"
import { CityMapper } from "src/infra/repositories/typeorm/mapper/city.mapper"
import { DistrictMapper } from "src/infra/repositories/typeorm/mapper/district.mapper"
import { StateMapper } from "src/infra/repositories/typeorm/mapper/state.mapper"

export class CreateHelper {
  constructor(
    private readonly body: CreateDTO,
    private readonly uuidManager: UUIDManager
  ) {}

  public state() {
    const state = new StateMapper()
    state.name = this.body.state.name
    state.id = this.uuidManager.generate()

    const district = this.district()
    const city = this.city(state, district)

    state.city = [city]

    return {
      state,
      city,
      district
    }
  }

  public city(state: StateMapper, district: DistrictMapper) {
    const city = new CityMapper()
    city.id = this.uuidManager.generate()
    city.name = this.body.state.city.name
    city.district = [district]
    city.state = state
    return city
  }

  public district(city?: CityMapper) {
    const district = new DistrictMapper()
    district.id = this.uuidManager.generate()
    district.name = this.body.state.city.district.name
    district.city = city ? city : undefined
    return district
  }
}
