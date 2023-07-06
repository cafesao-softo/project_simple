import { StateEntity } from "src/domain/entities/state.entity"

export interface IUpdateStateCommand {
  execute(params: IUpdateStateCommand.Params): Promise<boolean>
}

export namespace IUpdateStateCommand {
  export type Params = {
    query: StateEntity.UpdateQuery
    body: StateEntity.UpdateBody
  }
}
