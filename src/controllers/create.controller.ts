import { Body, Controller, Post } from "@nestjs/common"
import { AppService } from "../services/app.service"
import { transformLowercaseBody } from "src/pipes/transformLowercaseBody.pipe"
@Controller("/api")
export class CreateController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body(transformLowercaseBody) body: IBody) {
    const newBody = {
      name: body.district.name,
      state: body.state,
      city: body.city
    }
    return await this.appService.create(newBody)
  }
}
