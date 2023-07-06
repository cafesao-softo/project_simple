import { StateEntity } from "src/domain/entities/state.entity"

export interface IDeleteStateCommand {
  execute(params: IDeleteStateCommand.Params): Promise<boolean>
}

export namespace IDeleteStateCommand {
  export type Params = Partial<StateEntity.Delete>
}
