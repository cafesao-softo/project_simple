import { Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { AppService } from "../services/app.service"
import { transformLowercase } from "src/pipes/transformLowercase.pipe"
import { StateModel } from "src/models/State"

@Controller("/api/states")
export class StateController {
  constructor(private readonly appService: AppService) {}

  @Get("/:stateName")
  async read(
    @Param("stateName", transformLowercase) stateName: string
  ): Promise<StateModel> {
    return await this.appService.getState(stateName, true)
  }

  @Put("/:stateName")
  update(@Param("stateName", transformLowercase) stateName: string): string {
    return stateName
  }

  @Delete("/:stateName")
  delete(@Param("stateName", transformLowercase) stateName: string): string {
    return stateName
  }
}
