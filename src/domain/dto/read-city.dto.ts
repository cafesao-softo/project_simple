import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class IReadCityParamsDTO {
  @ApiProperty({
    example: 1
  })
  @IsString()
  @IsNotEmpty()
  id: string
}

export class IReadCityServiceDTO {
  id?: string
  cityName?: string
  stateName?: string
}
