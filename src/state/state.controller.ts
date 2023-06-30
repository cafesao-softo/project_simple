import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { StateService } from "./state.service"
import { transformLowercase } from "../shared/pipes/transformLowercase.pipe"
import { State } from "./state.entity"
import {
  UpdateStateBodyDTO,
  UpdateStateParamsDTO
} from "./dto/update-state.dto"
import { DeleteStateParamsDTO } from "./dto/delete-state.dto"
import { ReadStateParamsIdDTO } from "./dto/read-state.dto"
import { ApiOperation, ApiTags } from "@nestjs/swagger"

@ApiTags("States")
@Controller("states")
export class StateController {
  constructor(private readonly appService: StateService) {}

  @Get("/:id")
  @ApiOperation({
    description: "Get a state by name"
  })
  async read(
    @Param(transformLowercase) params: ReadStateParamsIdDTO
  ): Promise<State> {
    return await this.appService.readId(params, true)
  }

  @Put("/:id")
  @ApiOperation({
    description: "Update a state by name"
  })
  async update(
    @Body() body: UpdateStateBodyDTO,
    @Param(transformLowercase) params: UpdateStateParamsDTO
  ) {
    return await this.appService.update(params, body)
  }

  @Delete("/:id")
  @ApiOperation({
    description: "Delete a state by name"
  })
  async delete(@Param(transformLowercase) params: DeleteStateParamsDTO) {
    return await this.appService.delete(params)
  }
}
