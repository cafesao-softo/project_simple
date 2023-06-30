import { Body, Controller, Post } from "@nestjs/common"
import { CreateService } from "./services/create.service"
import { CreateDTO } from "./dto/create.dto"
import { CreateHelper } from "./helpers/create.helper"
import { SyncHelper } from "./helpers/sync.helper"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { ReadStateService } from "src/state/services/read-state.service"
import { ReadCityService } from "src/city/services/read-city.service"
import { transformLowercaseBodyCreate } from "src/shared/pipes/transformLowercaseBodyCreate.pipe"

@ApiTags("Create")
@Controller()
export class CreateController {
  constructor(
    private readonly createService: CreateService,
    private readonly readStateService: ReadStateService,
    private readonly readCityService: ReadCityService
  ) {}

  @Post()
  @ApiOperation({
    description: "Create new state/city/district"
  })
  async create(@Body(transformLowercaseBodyCreate) body: CreateDTO) {
    const createHelper = new CreateHelper(body)
    const syncHelper = new SyncHelper(this.createService)

    const isState = await this.readStateService.execute(
      {
        stateName: body.state.name
      },
      false
    )
    const isCity = await this.readCityService.execute(
      {
        cityName: body.state.city.name,
        stateName: body.state.name
      },
      false
    )

    if (isState && isCity) {
      const district = createHelper.district(isCity)
      await syncHelper.district(district)
    } else if (isState) {
      const district = createHelper.district()
      const city = createHelper.city(isState, district)
      await syncHelper.district(district)
      await syncHelper.city(city)
    } else {
      const { state, city, district } = createHelper.state()
      await syncHelper.state(state)
      await syncHelper.city(city)
      await syncHelper.district(district)
    }
  }
}
