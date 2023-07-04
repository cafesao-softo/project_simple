import { ICreateRepositoy } from "src/domain/repositories/create.repository"
import { CityMapper } from "src/infra/repositories/typeorm/mapper/city.mapper"
import { DistrictMapper } from "src/infra/repositories/typeorm/mapper/district.mapper"
import { StateMapper } from "src/infra/repositories/typeorm/mapper/state.mapper"

export class SyncHelper {
  constructor(private readonly createRepository: ICreateRepositoy) {}

  public async state(state: StateMapper) {
    await this.createRepository.execute({ data: state })
  }

  public async city(city: CityMapper) {
    await this.createRepository.execute({ data: city })
  }

  public async district(district: DistrictMapper) {
    await this.createRepository.execute({ data: district })
  }
}
