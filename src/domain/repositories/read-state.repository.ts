import { StateEntity } from "../entities/state.entity"

export interface IReadStateRepository {
  execute(params: IReadStateRepository.Params): Promise<StateEntity>
}

export namespace IReadStateRepository {
  export interface Params {
    id: string
  }
}
