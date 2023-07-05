import { StateEntity } from "src/domain/entities/state.entity"

export interface IReadAllStateQuery {
  execute(): Promise<StateEntity[]>
}
