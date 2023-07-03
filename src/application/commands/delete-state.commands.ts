import { StateEntity } from "src/domain/entities/state.entity"
import { IDeleteCityRepository } from "src/domain/repositories/delete-city.repository"

export class DeleteStateCommand {
  constructor(private readonly deleteStateRepository: IDeleteCityRepository) {}

  async execute(params: DeleteStateCommand.Params) {
    await this.deleteStateRepository.execute({
      id: params.id
    })
  }
}

export namespace DeleteStateCommand {
  export type Params = StateEntity.Delete
}
