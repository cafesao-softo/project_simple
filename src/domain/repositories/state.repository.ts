import { StateEntity } from "src/domain/entities/state.entity"

export interface IStateRepository {
  find(input: Partial<IStateRepository.Find>): Promise<StateEntity[]>
  findOne(input: Partial<IStateRepository.Find>): Promise<StateEntity>
  save(input: StateEntity): Promise<void>
}

export namespace IStateRepository {
  export type Find = {
    id: string
    name: string
  }
}
