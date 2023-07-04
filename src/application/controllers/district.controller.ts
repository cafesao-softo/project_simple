import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { ReadDistrictCommand } from "../commands/read-district.commands"
import { UpdateDistrictCommand } from "../commands/update-district.commands"
import { DeleteDistrictCommand } from "../commands/delete-district.commands"
import { transformLowercase } from "src/domain/pipes/transformLowercase.pipe"
import { ReadDistrictParamsDTO } from "src/domain/dto/read-district.dto"
import {
  UpdateDistrictBodyDTO,
  UpdateDistrictParamsDTO
} from "src/domain/dto/update-district.dto"
import { DeleteDistrictParamsDTO } from "src/domain/dto/delete-district.dto"
import { StateEntity } from "src/domain/entities/state.entity"

@ApiTags("Districts")
@Controller("districts")
export class DistrictController {
  constructor(
    private readonly readDistrictCommand: ReadDistrictCommand,
    private readonly updateDistrictCommand: UpdateDistrictCommand,
    private readonly deleteDistrictCommand: DeleteDistrictCommand
  ) {}

  @Get("/:id")
  @ApiOperation({
    description: "Get district by name and city name"
  })
  async read(
    @Param(transformLowercase) params: ReadDistrictParamsDTO
  ): Promise<StateEntity | boolean> {
    return await this.readDistrictCommand.execute(params)
  }

  @Put("/:id")
  @ApiOperation({
    description: "Update district by name and city name"
  })
  async update(
    @Body() body: UpdateDistrictBodyDTO,
    @Param(transformLowercase) params: UpdateDistrictParamsDTO
  ) {
    return await this.updateDistrictCommand.execute(params, body)
  }

  @Delete("/:id")
  @ApiOperation({
    description: "Delete district by name and city name"
  })
  async delete(@Param(transformLowercase) params: DeleteDistrictParamsDTO) {
    return await this.deleteDistrictCommand.execute(params)
  }
}
