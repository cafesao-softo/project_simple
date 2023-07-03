import { StateEntity } from "src/domain/entities/state.entity"
import { IReadStateRepository } from "src/domain/repositories/read-state.repository"

export class ReadStateCommand {
  constructor(private readonly readStateRepository: IReadStateRepository) {}

  async execute(params: ReadStateCommand.Params) {
    await this.readStateRepository.execute({
      id: params.id
    })
  }
}

export namespace ReadStateCommand {
  export type Params = StateEntity.Read
}
