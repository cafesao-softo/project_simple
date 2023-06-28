import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { StateService } from "./state.service"
import { transformLowercase } from "../shared/pipes/transformLowercase.pipe"
import { State } from "./state.entity"
import { UpdateStateDTO } from "./dto/update-state.dto"

@Controller("states")
export class StateController {
  constructor(private readonly appService: StateService) {}

  @Get("/:stateName")
  async read(
    @Param("stateName", transformLowercase) stateName: string
  ): Promise<State> {
    return await this.appService.get(stateName, true)
  }

  @Put("/:stateName")
  update(
    @Body() body: UpdateStateDTO,
    @Param("stateName", transformLowercase) stateName: string
  ): string {
    return stateName
  }

  @Delete("/:stateName")
  delete(@Param("stateName", transformLowercase) stateName: string): string {
    return stateName
  }
}
