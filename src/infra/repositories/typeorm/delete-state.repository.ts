import { DataSource } from "typeorm"
import { Injectable } from "@nestjs/common"
import { StateMapper } from "./mapper/state.mapper"
import { IDeleteStateRepository } from "src/domain/repositories/delete-state.repository"

@Injectable()
export class DeleteStateRepository implements IDeleteStateRepository {
  constructor(private readonly connection: DataSource) {}
  public async execute(params: IDeleteStateRepository.Params) {
    const repository = this.connection.getRepository(StateMapper)
    await repository.delete({ id: params.id })
    return true
  }
}
