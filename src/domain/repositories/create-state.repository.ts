import { StateEntity } from "../entities/state.entity"

export interface ICreateStateRepositoy {
  execute(data: StateEntity): Promise<boolean>
}
