import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class DeleteStateParamsDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  stateName: string
}
