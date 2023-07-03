import { Body, Controller, Post } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { transformLowercaseBodyCreate } from "src/domain/pipes/transformLowercaseBodyCreate.pipe"

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
