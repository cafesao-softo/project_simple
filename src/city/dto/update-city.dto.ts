import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class UpdateCityBodyDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string
}

export class UpdateCityParamsDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cityName: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  stateName: string
}
