import { DistrictEntity } from "../entities/district.entity"

export interface IDistrictRepository {
  create(data: IDistrictRepository.Create): Promise<boolean>
  findOne(data: IDistrictRepository.FindOne): Promise<DistrictEntity>
  update(
    query: IDistrictRepository.UpdateQuery,
    body: IDistrictRepository.UpdateBody
  ): Promise<boolean>
  delete(data: IDistrictRepository.Delete): Promise<boolean>
}

export namespace IDistrictRepository {
  export type Create = DistrictEntity
  export type FindOne = {
    id: string
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
