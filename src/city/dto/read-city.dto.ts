import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class ReadCityParamsIdDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: number
}

export class ReadCityParamsDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cityName: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  stateName: string
}
