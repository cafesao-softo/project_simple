import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class UpdateDistrictBodyDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string
}

export class UpdateDistrictParamsDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cityName: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  districtName: string
}
