import { StateEntity } from "src/domain/entities/state.entity"
import { CityAssembler } from "./city.assembler";

export class StateAssembler {
  static assembly(input: StateAssembler.Input): StateEntity {
    if(!input) return new StateEntity();
    return new StateEntity({
      id: input.id,
      name: input.name,
      cities: input.cities.map((city) => CityAssembler.assembly(city))
    })
  }
}

export namespace StateAssembler {
  export type Input = {
    id: string
    name: string,
    cities: CityAssembler.Input[]
  }

}