import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class IUpdateCityBodyDTO {
  @ApiProperty({
    example: "Navegantes"
  })
  @IsString()
  @IsNotEmpty()
  name: string
}

export class IUpdateCityParamsDTO {
  @ApiProperty({
    example: 1
  })
  @IsString()
  @IsNotEmpty()
  id: string
}
