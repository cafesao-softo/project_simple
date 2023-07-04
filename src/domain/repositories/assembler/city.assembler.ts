import { CityEntity } from "src/domain/entities/city.entity";

export class CityAssembler {
  static assembly(input: CityAssembler.Input): CityEntity {
    if(!input) return new CityEntity();
    return new CityEntity({
      id: input.id,
      name: input.name
    })
  }
}

export namespace CityAssembler {
  export type Input = {
    id: string
    name: string
  }

}