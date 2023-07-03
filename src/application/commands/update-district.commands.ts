import { DistrictEntity } from "src/domain/entities/district.entity"
import { IUpdateDistrictRepository } from "src/domain/repositories/update-district.repository"

export class UpdateDistrictCommand {
  constructor(
    private readonly updateDistrictRepository: IUpdateDistrictRepository
  ) {}

  async execute(params: UpdateDistrictCommand.Params) {
    await this.updateDistrictRepository.execute(
      {
        id: params.query.id
      },
      params.body
    )
  }
}

export namespace UpdateDistrictCommand {
  export type Params = {
    query: DistrictEntity.UpdateQuery
    body: DistrictEntity.UpdateBody
  }
}
