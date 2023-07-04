import { CityEntity } from "../entities/city.entity"

export interface ICityRepository {
  create(params: ICityRepository.Create): Promise<boolean>
  findOne(params: ICityRepository.FindOne): Promise<CityEntity | false>
  findWithNameAndState(
    params: ICityRepository.FindWithNameAndState
  ): Promise<CityEntity | false>
  update(
    query: ICityRepository.UpdateQuery,
    body: ICityRepository.UpdateBody
  ): Promise<boolean>
  delete(params: ICityRepository.Delete): Promise<boolean>
}

export namespace ICityRepository {
  export type Create = CityEntity
  export type FindOne = {
    id: string
  }
  export type FindWithNameAndState = {
    cityName: string
    stateName: string
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
