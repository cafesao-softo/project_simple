import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { StateService } from "./state.service"
import { transformLowercase } from "../shared/pipes/transformLowercase.pipe"
import { State } from "./state.entity"
import {
  UpdateStateBodyDTO,
  UpdateStateParamsDTO
} from "./dto/update-state.dto"
import { DeleteStateParamsDTO } from "./dto/delete-state.dto"
import { ReadStateParamsDTO } from "./dto/read-state.dto"
import { ApiOperation, ApiTags } from "@nestjs/swagger"

@ApiTags("States")
@Controller("states")
export class StateController {
  constructor(private readonly appService: StateService) {}

  @Get("/:stateName")
  @ApiOperation({
    description: "Get a state by name"
  })
  async read(
    @Param(transformLowercase) params: ReadStateParamsDTO
  ): Promise<State> {
    return await this.appService.read(params, true)
  }

  @Put("/:stateName")
  @ApiOperation({
    description: "Update a state by name"
  })
  async update(
    @Body() body: UpdateStateBodyDTO,
    @Param(transformLowercase) params: UpdateStateParamsDTO
  ) {
    return await this.appService.update(params, body)
  }

  @Delete("/:stateName")
  @ApiOperation({
    description: "Delete a state by name"
  })
  async delete(@Param(transformLowercase) params: DeleteStateParamsDTO) {
    return await this.appService.delete(params)
  }
}
