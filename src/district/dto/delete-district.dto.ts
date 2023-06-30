import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class DeleteDistrictParamsDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: number
}
