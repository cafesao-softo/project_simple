import { Body, Controller, Inject, Post } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { ICreateDTO } from "src/domain/dto/create.dto"
import { IStateRepository } from "src/domain/repositories/state.repository"
import { ICityRepository } from "src/domain/repositories/city.repository"
import { transformLowercaseBodyCreate } from "src/infra/pipes/transformLowercaseBodyCreate.pipe"
import { ICreateStateCommand } from "src/application/commands/contracts/create-state.contract"
import { ICreateCityCommand } from "src/application/commands/contracts/create-city.contract"
import { ICreateDistrictCommand } from "src/application/commands/contracts/create-district.contract"
import { GeoProviderEnum } from "../ioc/constants/geo.const"

@ApiTags("Create")
@Controller()
export class CreateController {
  constructor(
    @Inject(GeoProviderEnum.StateRepository)
    private readonly stateRepository: IStateRepository,
    @Inject(GeoProviderEnum.CityRepository)
    private readonly cityRepository: ICityRepository,
    @Inject(GeoProviderEnum.CreateStateCommand)
    private readonly createStateCommand: ICreateStateCommand,
    @Inject(GeoProviderEnum.CreateCityCommand)
    private readonly createCityCommand: ICreateCityCommand,
    @Inject(GeoProviderEnum.CreateDistrictCommand)
    private readonly createDistrictCommand: ICreateDistrictCommand
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

    if (
      isState.getState().id !== undefined &&
      isCity.getState().id !== undefined
    ) {
      console.log("a")
      await this.createDistrictCommand.execute({
        name: body.state.city.name,
        cityId: isCity.getState().id
      })
      return true
    } else if (isState.getState().id !== undefined) {
      const city = await this.createCityCommand.execute({
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
