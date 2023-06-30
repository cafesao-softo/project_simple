import { State } from "src/state/state.entity"
import { CreateService } from "../create.service"
import { CreateDTO } from "../dto/create.dto"
import { City } from "src/city/city.entity"
import { District } from "src/district/district.entity"

export class CreateHelper {
  constructor(private readonly body: CreateDTO) {}

  public state() {
    const state = new State()
    state.name = this.body.state.name

    const district = this.district()
    const city = this.city(state, district)

    state.city = [city]

    return {
      state,
      city,
      district
    }
  }

  public city(state: State, district: District) {
    const city = new City()
    city.name = this.body.city.name
    city.district = [district]
    city.state = state
    return city
  }

  public district(city?: City) {
    const district = new District()
    district.name = this.body.district.name
    district.city = city ? city : undefined
    return district
  }
}
