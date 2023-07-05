export class DistrictEntity {
  private id: string
  private name: string
  private cityId: string
  private deleteAt: Date

  constructor(params?: DistrictEntity.Params) {
    Object.assign(this, params)
  }

  create(params: DistrictEntity.Params) {
    if (!params.id || params.id === "") throw new Error("ID not empty")
    if (!params.name || params.name === "") throw new Error("Name not empty")
    this.id = params.id
    this.name = params.name
    return this
  }

  getState(): DistrictEntity.State {
    return {
      id: this.id,
      name: this.name,
      cityId: this.cityId
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

export namespace DistrictEntity {
  export type Params = {
    id: string
    name: string
    cityId?: string
  }

  export type Create = {
    id: string
    name: string
    cityId?: string
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
