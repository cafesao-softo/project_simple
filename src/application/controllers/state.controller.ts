import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"

@ApiTags("States")
@Controller("states")
export class StateController {
  constructor(
    private readonly readService: ReadStateService,
    private readonly updateService: UpdateStateService,
    private readonly deleteService: DeleteStateService
  ) {}

  @Get("/:id")
  @ApiOperation({
    description: "Get a state by name"
  })
  async read(
    @Param(transformLowercase) params: ReadStateParamsDTO
  ): Promise<State> {
    typeof params.id
    return await this.readService.execute(params, true)
  }

  @Put("/:id")
  @ApiOperation({
    description: "Update a state by name"
  })
  async update(
    @Body() body: UpdateStateBodyDTO,
    @Param(transformLowercase) params: UpdateStateParamsDTO
  ) {
    return await this.updateService.execute(params, body)
  }

  @Delete("/:id")
  @ApiOperation({
    description: "Delete a state by name"
  })
  async delete(@Param(transformLowercase) params: DeleteStateParamsDTO) {
    return await this.deleteService.execute(params)
  }
}
