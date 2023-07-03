import { DataSource } from "typeorm"
import { Injectable } from "@nestjs/common"
import { StateMapper } from "./mapper/state.mapper"
import { IUpdateStateRepository } from "src/domain/repositories/update-state.repository"

@Injectable()
export class UpdateStateRepository implements IUpdateStateRepository {
  constructor(private readonly connection: DataSource) {}

  public async execute(
    params: IUpdateStateRepository.Params,
    body: IUpdateStateRepository.Body
  ) {
    const repository = this.connection.getRepository(StateMapper)
    await repository.update({ id: params.id }, body)
    return true
  }
}
