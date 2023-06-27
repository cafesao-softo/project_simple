import { Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { AppService } from "../services/app.service"
import { transformLowercase } from "src/pipes/transformLowercase.pipe"

@Controller("/api/state")
export class StateController {
  constructor(private readonly appService: AppService) {}

  @Get("/:state")
  read(@Param("state", transformLowercase) state: string): string {
    return state
  }

  @Put("/:stateOld/:stateNew")
  update(
    @Param("stateOld", transformLowercase) stateOld: string,
    @Param("stateNew", transformLowercase) stateNew: string
  ): string {
    return `${stateOld} and ${stateNew}`
  }

  @Delete("/:state")
  delete(@Param("state", transformLowercase) state: string): string {
    return state
  }
}
