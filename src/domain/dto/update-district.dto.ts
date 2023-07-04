import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class IUpdateDistrictBodyDTO {
  @ApiProperty({
    example: "Centro"
  })
  @IsString()
  @IsNotEmpty()
  name: string
}

export class IUpdateDistrictParamsDTO {
  @ApiProperty({
    example: 1
  })
  @IsString()
  @IsNotEmpty()
  id: string
}
