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

@Controller("states")
export class StateController {
  constructor(private readonly appService: StateService) {}

  @Get("/:stateName")
  async read(
    @Param(transformLowercase) params: ReadStateParamsDTO
  ): Promise<State> {
    return await this.appService.get(params, true)
  }

  @Put("/:stateName")
  async update(
    @Body() body: UpdateStateBodyDTO,
    @Param(transformLowercase) params: UpdateStateParamsDTO
  ) {
    return await this.appService.update(params, body)
  }

  @Delete("/:stateName")
  async delete(@Param(transformLowercase) params: DeleteStateParamsDTO) {
    return await this.appService.delete(params)
  }
}
