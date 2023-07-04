import { CityEntity } from "src/domain/entities/city.entity"

export interface ICityRepository {
  find(input: Partial<ICityRepository.Find>): Promise<CityEntity[]>
  findOne(input: Partial<ICityRepository.Find>): Promise<CityEntity>
  save(input: CityEntity): Promise<void>
}

export namespace ICityRepository {
  export type Find = {
    id: string
    name: string
    stateId: string
  }
}
