import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  ValidateNested
} from "class-validator"

class DistrictNameDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string
}

class CityNameDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @ValidateNested()
  @Type(() => DistrictNameDTO)
  district: DistrictNameDTO
}

class StateNameDTO {
  @ApiProperty()
  @MaxLength(2)
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @ValidateNested()
  @Type(() => CityNameDTO)
  city: CityNameDTO
}

export class CreateDTO {
  @ApiProperty()
  @ValidateNested()
  @Type(() => StateNameDTO)
  state: StateNameDTO
}
