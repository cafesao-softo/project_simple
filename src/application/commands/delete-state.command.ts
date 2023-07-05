import { Inject, Injectable } from "@nestjs/common"
import { StateEntity } from "src/domain/entities/state.entity"
import { IStateRepository } from "src/domain/repositories/state.repository"
import { IDeleteStateCommand } from "./contracts/delete-state.contracts"

@Injectable()
export class DeleteStateCommand implements IDeleteStateCommand {
  constructor(
    @Inject("StateRepository")
    private readonly stateRepository: IStateRepository
  ) {}

  async execute(params: DeleteStateCommand.Params) {
    await this.stateRepository.delete({
      id: params.id
    })
    return true
  }
}

export namespace DeleteStateCommand {
  export type Params = StateEntity.Delete
}
