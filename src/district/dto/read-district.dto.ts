import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class ReadDistrictParamsDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cityName: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  districtName: string
}
