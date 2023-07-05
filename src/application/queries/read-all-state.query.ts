import { StateEntity } from "src/domain/entities/state.entity"
import { IReadAllStateQuery } from "./contracts/read-all-state.query"
import { IStateRepository } from "src/domain/repositories/state.repository"
import { Inject } from "@nestjs/common"

export class ReadAllStateQuery implements IReadAllStateQuery {
  constructor(
    @Inject("StateRepository")
    private readonly stateRepository: IStateRepository
  ) {}

  async execute(): Promise<StateEntity[]> {
    return await this.stateRepository.findAll()
  }
}
