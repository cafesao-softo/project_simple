import { StateEntity } from "../entities/state.entity"

export interface IStateRepository {
  save(params: IStateRepository.Create): Promise<boolean>
  findOne(params: IStateRepository.FindOne): Promise<StateEntity>
  findWithName(params: IStateRepository.FindWithName): Promise<StateEntity>
  findAll(): Promise<StateEntity[]>
  update(
    query: IStateRepository.UpdateQuery,
    body: IStateRepository.UpdateBody
  ): Promise<boolean>
  delete(params: IStateRepository.Delete): Promise<boolean>
}

export namespace IStateRepository {
  export type Create = StateEntity
  export type FindOne = {
    id: string
  }
  export type FindWithName = {
    name: string
  }
  export type UpdateQuery = {
    id: string
  }
  export type UpdateBody = {
    name: string
  }
  export type Delete = {
    id: string
  }
}
