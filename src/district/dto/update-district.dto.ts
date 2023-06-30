import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class UpdateDistrictBodyDTO {
  @ApiProperty({
    example: "Centro"
  })
  @IsString()
  @IsNotEmpty()
  name: string
}

export class UpdateDistrictParamsDTO {
  @ApiProperty({
    example: 1
  })
  @IsString()
  @IsNotEmpty()
  id: number
}
