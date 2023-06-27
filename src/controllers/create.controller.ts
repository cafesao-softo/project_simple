import { Controller, Post } from "@nestjs/common"
import { AppService } from "../services/app.service"

@Controller("/api")
export class CityController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(): string {
    return
  }
}
