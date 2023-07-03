import { UUIDManager } from "src/domain/cryptos/uuid"
import { StateEntity } from "src/domain/entities/state.entity"
import { ICreateStateRepositoy } from "src/domain/repositories/create-state.repository"

export class CreateStateCommand {
  constructor(
    private readonly createStateRepository: ICreateStateRepositoy,
    private readonly uuidManager: UUIDManager
  ) {}

  async execute(params: CreateStateCommand.Params) {
    const state = new StateEntity().create({
      id: this.uuidManager.generate(),
      name: params.name,
      cities: params.cities
    })
    await this.createStateRepository.execute(state)
  }
}

export namespace CreateStateCommand {
  export type Params = StateEntity.Create
}
