import { Type } from "class-transformer"
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  ValidateNested
} from "class-validator"

class StateNameDTO {
  @MaxLength(2)
  @IsString()
  @IsNotEmpty()
  name: string
}

class CityNameDTO {
  @IsString()
  @IsNotEmpty()
  name: string
}

class DistrictNameDTO {
  @IsString()
  @IsNotEmpty()
  name: string
}

export class CreateDTO {
  @ValidateNested()
  @Type(() => StateNameDTO)
  state: StateNameDTO

  @ValidateNested()
  @Type(() => CityNameDTO)
  city: CityNameDTO

  @ValidateNested()
  @Type(() => DistrictNameDTO)
  district: DistrictNameDTO
}
