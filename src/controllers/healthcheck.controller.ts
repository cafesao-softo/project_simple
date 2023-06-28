import { Controller, Get, HttpCode } from "@nestjs/common"

@Controller("/api/healthcheck")
export class HealthcheckController {
  constructor() {}

  @Get()
  @HttpCode(200)
  healthcheck() {
    return "Server is healthy"
  }
}
