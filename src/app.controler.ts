import { Controller, Get, HttpCode } from "@nestjs/common"

@Controller()
export class AppController {
  constructor() {}

  @Get("/api/healthcheck")
  @HttpCode(200)
  healthcheck() {
    return "Server is healthy"
  }
}
