import { DistrictEntity } from "src/domain/entities/district.entity"
import { IDeleteCityRepository } from "src/domain/repositories/delete-city.repository"

export class DeleteDistrictCommand {
  constructor(
    private readonly deleteDistrictRepository: IDeleteCityRepository
  ) {}

  async execute(params: DeleteDistrictCommand.Params) {
    await this.deleteDistrictRepository.execute({
      id: params.id
    })
  }
}

export namespace DeleteDistrictCommand {
  export type Params = DistrictEntity.Delete
}
