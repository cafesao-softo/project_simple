export class DistrictEntity {
  private id = ""
  private name = ""

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
      name: this.name
    }
  }
}

export namespace DistrictEntity {
  export type Params = {
    id: string
    name: string
  }

  export type Create = {
    id: string
    name: string
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
