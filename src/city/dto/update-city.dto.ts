import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class UpdateCityBodyDTO {
  @ApiProperty({
    example: "Navegantes"
  })
  @IsString()
  @IsNotEmpty()
  name: string
}

export class UpdateCityParamsDTO {
  @ApiProperty({
    example: 1
  })
  @IsString()
  @IsNotEmpty()
  id: number
}
