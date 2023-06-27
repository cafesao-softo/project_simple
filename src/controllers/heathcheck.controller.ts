import { Controller, Get, HttpCode } from "@nestjs/common"

@Controller("/api/heathcheck")
export class HeathcheckController {
  constructor() {}

  @Get()
  @HttpCode(200)
  heathcheck() {
    return "Server is healthy"
  }
}
