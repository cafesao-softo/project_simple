import { Injectable } from "@nestjs/common"
import { StateEntity } from "src/domain/entities/state.entity"
import { IStateRepository } from "src/domain/repositories/state.repository"
import { IDeleteStateCommand } from "./contracts/delete-state.contract"

@Injectable()
export class DeleteStateCommand implements IDeleteStateCommand {
  constructor(private readonly stateRepository: IStateRepository) {}

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
