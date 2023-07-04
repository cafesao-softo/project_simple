import { StateMapper } from "src/infra/repositories/typeorm/mapper/state.mapper"

export interface IReadStateWithNameRepository {
  execute(params: IReadStateWithNameRepository.Params): Promise<StateMapper>
}

export namespace IReadStateWithNameRepository {
  export interface Params {
    name: string
  }
}
