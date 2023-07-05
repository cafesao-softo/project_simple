import { DistrictEntity } from "./district.entity"

export class CityEntity {
  private id: string
  private name: string
  private stateId: string
  private districts: DistrictEntity[]
  private deleteAt: Date

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
    this.stateId = params.stateId
    return this
  }

  getState(): CityEntity.State {
    return {
      id: this.id,
      name: this.name,
      districts: this.districts,
      stateId: this.stateId
    }
  }

  exists(): boolean {
    return !!this.id
  }

  existsOrFail() {
    if (!this.exists()) {
      throw new Error("Not exist")
    }
  }

  delete() {
    this.deleteAt = new Date()
  }
}

export namespace CityEntity {
  export type Params = {
    id: string
    name: string
    stateId?: string
    districts: DistrictEntity[]
  }

  export type Create = {
    id: string
    name: string
    stateId?: string
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
