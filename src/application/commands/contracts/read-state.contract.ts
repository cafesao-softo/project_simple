import { StateEntity } from "src/domain/entities/state.entity"

export interface IReadStateQuery {
  execute(params: IReadStateQuery.Params): Promise<StateEntity | false>
}

export namespace IReadStateQuery {
  export type Params = StateEntity.Read
}
