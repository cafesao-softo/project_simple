import { Body, Controller, Inject, Post } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { ICreateDTO } from "src/domain/dto/create.dto"
import { IStateRepository } from "src/domain/repositories/state.repository"
import { ICityRepository } from "src/domain/repositories/city.repository"
import { transformLowercaseBodyCreate } from "src/infra/pipes/transformLowercaseBodyCreate.pipe"
import { CreateStateCommand } from "../../application/commands/create-state.command"
import { CreateCityCommand } from "../../application/commands/create-city.command"
import { CreateDistrictCommand } from "../../application/commands/create-district.command"

@ApiTags("Create")
@Controller()
export class CreateController {
  constructor(
    @Inject("StateRepository")
    private readonly stateRepository: IStateRepository,
    @Inject("CityRepository")
    private readonly cityRepository: ICityRepository,
    private readonly createStateCommand: CreateStateCommand,
    private readonly createCityCommand: CreateCityCommand,
    private readonly createDistrictCommand: CreateDistrictCommand
  ) {}

  @Post()
  @ApiOperation({
    description: "Create new state/city/district"
  })
  async create(@Body(transformLowercaseBodyCreate) body: ICreateDTO) {
    const isState = await this.stateRepository.findWithName({
      name: body.state.name
    })
    const isCity = await this.cityRepository.findWithNameAndState({
      cityName: body.state.city.name,
      stateName: body.state.name
    })

    if (isState && isCity) {
      await this.createDistrictCommand.execute({
        name: body.state.city.name,
        cityId: isCity.getState().id
      })
      return true
    } else if (isState) {
      const city = await this.createCityCommand.execute({
        id: isCity.getState().id,
        name: body.state.city.name,
        stateId: isState.getState().id
      })
      await this.createDistrictCommand.execute({
        name: body.state.city.district.name,
        cityId: city.getState().id
      })
      return true
    } else {
      const state = await this.createStateCommand.execute({
        name: body.state.name
      })
      const city = await this.createCityCommand.execute({
        name: body.state.city.name,
        stateId: state.getState().id
      })
      await this.createDistrictCommand.execute({
        name: body.state.city.district.name,
        cityId: city.getState().id
      })
      return true
    }
  }
}
