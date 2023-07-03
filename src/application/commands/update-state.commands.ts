import { DistrictEntity } from "src/domain/entities/district.entity"
import { IUpdateStateRepository } from "src/domain/repositories/update-state.repository"

export class UpdateStateCommand {
  constructor(private readonly updateStateRepository: IUpdateStateRepository) {}

  async execute(params: UpdateStateCommand.Params) {
    await this.updateStateRepository.execute(
      {
        id: params.query.id
      },
      params.body
    )
  }
}

export namespace UpdateStateCommand {
  export type Params = {
    query: DistrictEntity.UpdateQuery
    body: DistrictEntity.UpdateBody
  }
}
