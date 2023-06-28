import { IsNotEmpty, IsString } from "class-validator"
import { City } from "src/city/city.entity"

export class CreateDistrictDTO {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  city: City
}
