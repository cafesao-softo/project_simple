import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"

import { transformLowercase } from "../shared/pipes/transformLowercase.pipe"
import { State } from "./state.entity"
import {
  UpdateStateBodyDTO,
  UpdateStateParamsDTO
} from "./dto/update-state.dto"
import { DeleteStateParamsDTO } from "./dto/delete-state.dto"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { UpdateStateService } from "./services/update-state.service"
import { DeleteStateService } from "./services/delete-state.service"
import { ReadStateService } from "./services/read-state.service"
import { ReadStateParamsDTO } from "./dto/read-state.dto"

@ApiTags("States")
@Controller("states")
export class StateController {
  constructor(
    private readonly readService: ReadStateService,
    private readonly updateService: UpdateStateService,
    private readonly deleteService: DeleteStateService
  ) {}

  @Get("/:id")
  @ApiOperation({
    description: "Get a state by name"
  })
  async read(
    @Param(transformLowercase) params: ReadStateParamsDTO
  ): Promise<State> {
    typeof params.id
    return await this.readService.execute(params, true)
  }

  @Put("/:id")
  @ApiOperation({
    description: "Update a state by name"
  })
  async update(
    @Body() body: UpdateStateBodyDTO,
    @Param(transformLowercase) params: UpdateStateParamsDTO
  ) {
    return await this.updateService.execute(params, body)
  }

  @Delete("/:id")
  @ApiOperation({
    description: "Delete a state by name"
  })
  async delete(@Param(transformLowercase) params: DeleteStateParamsDTO) {
    return await this.deleteService.execute(params)
  }
}
