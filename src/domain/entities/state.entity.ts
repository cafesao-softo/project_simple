import { CityEntity } from "./city.entity"

const state = new StateEntity();

state.exists()

export class StateEntity {
  private id
  private name
  private cities: CityEntity[]

  constructor(params?: Partial<StateEntity.Params>) {
    Object.assign(this, params)
  }

  exists(): boolean {
    return !!this.id
  }

  existsOrFail(): boolean {
    if(!this.exists()) throw new Error("Nao existe")
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

  getState(): StateEntity.State {
    return {
      id: this.id,
      name: this.name,
      cities: this.cities
    }
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
    cities: CityEntity.Create[]
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
