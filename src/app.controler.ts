import { Controller, Get, HttpCode } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"

@ApiTags("Healthcheck")
@Controller()
export class AppController {
  @Get("/healthcheck")
  @HttpCode(200)
  @ApiOperation({
    description: "Healthcheck endpoint"
  })
  healthcheck() {
    return "Server is healthy"
  }
}
