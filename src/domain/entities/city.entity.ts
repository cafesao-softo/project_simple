import { DistrictEntity } from "./district.entity"

export class CityEntity {
  private id = ""
  private name = ""
  private districts: DistrictEntity[]

  constructor(params?: Partial<CityEntity.Params>) {
    Object.assign(this, params)
  }

  create(params: CityEntity.Create) {
    if (!params.id || params.id === "") throw new Error("ID not empty")
    if (!params.name || params.name === "") throw new Error("Name not empty")
    if (!params.districts) throw new Error("Districts not empty")
    this.id = params.id
    this.name = params.name
    this.districts = params.districts
    return this
  }

  getState(): CityEntity.State {
    return {
      id: this.id,
      name: this.name,
      districts: this.districts
    }
  }
}

export namespace CityEntity {
  export type Params = {
    id: string
    name: string
    districts: DistrictEntity[]
  }

  export type Create = {
    id: string
    name: string
    districts: DistrictEntity[]
  }

  export type Read = {
    id: string
  }

  export type UpdateBody = {
    name: string
  }
  export type UpdateQuery = {
    id: string
  }

  export type Delete = {
    id: string
  }

  export type State = Params
}
