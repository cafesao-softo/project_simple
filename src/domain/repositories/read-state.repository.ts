import { StateMapper } from "src/infra/repositories/typeorm/mapper/state.mapper"

export interface IReadStateRepository {
  execute(params: IReadStateRepository.Params): Promise<StateMapper>
}

export namespace IReadStateRepository {
  export interface Params {
    id: string
  }
}
