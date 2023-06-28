import { Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { AppService } from "../services/app.service"
import { transformLowercase } from "src/pipes/transformLowercase.pipe"

@Controller("/api/states")
export class StateController {
  constructor(private readonly appService: AppService) {}

  @Get("/:stateName")
  read(@Param("stateName", transformLowercase) stateName: string): string {
    return stateName
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
