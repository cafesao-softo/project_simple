import { Inject, Injectable } from "@nestjs/common"
import { IUUID } from "src/domain/cryptos/uuid"
import { StateEntity } from "src/domain/entities/state.entity"
import { IStateRepository } from "src/domain/repositories/state.repository"
import { ICreateStateCommand } from "./contracts/create-state.contracts"

@Injectable()
export class CreateStateCommand implements ICreateStateCommand {
  constructor(
    @Inject("StateRepository")
    private readonly stateRepository: IStateRepository,
    @Inject("UUIDAdapter")
    private readonly uuidAdapter: IUUID
  ) {}

  async execute(params: CreateStateCommand.Params) {
    const entity = new StateEntity({
      id: params.id ? params.id : this.uuidAdapter.generate(),
      name: params.name
    })
    await this.stateRepository.save(entity)
    return entity
  }
}

export namespace CreateStateCommand {
  export type Params = Partial<StateEntity.Create>
}
