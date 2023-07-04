import { StateEntity } from "src/domain/entities/state.entity"

export interface ICreateStateCommand {
  execute(params: ICreateStateCommand.Params): Promise<StateEntity>
}

export namespace ICreateStateCommand {
  export type Params = Partial<StateEntity.Create>
}
