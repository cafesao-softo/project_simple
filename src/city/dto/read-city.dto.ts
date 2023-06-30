import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class ReadCityParamsDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: number
}

export class ReadCityServiceDTO {
  id?: number
  cityName?: string
  stateName?: string
}
