import { CityEntity } from "./city.entity"

export class StateEntity {
  private id: string
  private name: string
  private cities: CityEntity[]
  private deleteAt: Date

  constructor(params?: Partial<StateEntity.Params>) {
    Object.assign(this, params)
  }

  create(params: StateEntity.Create) {
    if (!params.id || params.id === "") throw new Error("ID not empty")
    if (!params.name || params.name === "") throw new Error("Name not empty")
    if (!params.cities) throw new Error("City not empty")
    this.id = params.id
    this.name = params.name
    this.cities = params.cities
    return this
  }

  getState(): StateEntity.Create {
    return {
      id: this.id,
      name: this.name,
      cities: this.cities
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

export namespace StateEntity {
  export type Params = {
    id: string
    name: string
    cities: CityEntity[]
  }

  export type Create = {
    id: string
    name: string
    cities: CityEntity[]
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
}
