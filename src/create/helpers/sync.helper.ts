import { State } from "src/state/state.entity"
import { CreateService } from "../services/create.service"
import { City } from "src/city/city.entity"
import { District } from "src/district/district.entity"

export class SyncHelper {
  constructor(private readonly createService: CreateService) {}

  public async state(state: State) {
    await this.createService.execute(state)
  }

  public async city(city: City) {
    await this.createService.execute(city)
  }

  public async district(district: District) {
    await this.createService.execute(district)
  }
}
