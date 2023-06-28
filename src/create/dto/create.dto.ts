import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  ValidateNested
} from "class-validator"

class StateNameDTO {
  @ApiProperty()
  @MaxLength(2)
  @IsString()
  @IsNotEmpty()
  name: string
}

class CityNameDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string
}

class DistrictNameDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string
}

export class CreateDTO {
  @ApiProperty()
  @ValidateNested()
  @Type(() => StateNameDTO)
  state: StateNameDTO

  @ApiProperty()
  @ValidateNested()
  @Type(() => CityNameDTO)
  city: CityNameDTO

  @ApiProperty()
  @ValidateNested()
  @Type(() => DistrictNameDTO)
  district: DistrictNameDTO
}
