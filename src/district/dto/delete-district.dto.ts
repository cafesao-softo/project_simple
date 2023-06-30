import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class DeleteDistrictParamsDTO {
  @ApiProperty({
    example: 1
  })
  @IsString()
  @IsNotEmpty()
  id: number
}
