import { Body, Controller, Post } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { CreateDTO } from "src/domain/dto/create.dto"
import { transformLowercaseBodyCreate } from "src/domain/pipes/transformLowercaseBodyCreate.pipe"
import { CreateHelper } from "../helpers/create.helper"
import { SyncHelper } from "../helpers/sync.helper"
import { CreateRepository } from "src/infra/repositories/typeorm/create.repository"
import { ReadStateWithNameRepository } from "src/infra/repositories/typeorm/read-state-with-name.repository"
import { ReadCityWithStateRepository } from "src/infra/repositories/typeorm/read-city-with-state.repository"
import { UUIDAdapter } from "src/infra/cryptos/uuid"

@ApiTags("Create")
@Controller()
export class CreateController {
  constructor(
    private readonly createRepository: CreateRepository,
    private readonly readStateWithNameRepository: ReadStateWithNameRepository,
    private readonly readCityWithStateRepository: ReadCityWithStateRepository,
    private readonly uuidManager: UUIDAdapter
  ) {}

  @Post()
  @ApiOperation({
    description: "Create new state/city/district"
  })
  async create(@Body(transformLowercaseBodyCreate) body: CreateDTO) {
    const createHelper = new CreateHelper(body, this.uuidManager)
    const syncHelper = new SyncHelper(this.createRepository)
    const isState = await this.readStateWithNameRepository.execute({
      name: body.state.name
    })
    const isCity = await this.readCityWithStateRepository.execute({
      cityName: body.state.city.name,
      stateName: body.state.name
    })

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
