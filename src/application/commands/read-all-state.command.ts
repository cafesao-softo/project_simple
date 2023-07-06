import { StateEntity } from "src/domain/entities/state.entity"
import { IReadAllStateQuery } from "./contracts/read-all-state.contract"
import { IStateRepository } from "src/domain/repositories/state.repository"
import { Injectable } from "@nestjs/common"

@Injectable()
export class ReadAllStateQuery implements IReadAllStateQuery {
  constructor(private readonly stateRepository: IStateRepository) {}

  async execute(): Promise<StateEntity[]> {
    return await this.stateRepository.findAll()
  }
}
