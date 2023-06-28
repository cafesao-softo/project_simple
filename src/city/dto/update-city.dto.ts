import { IsNotEmpty, IsString } from "class-validator"

export class UpdateCityDTO {
  @IsString()
  @IsNotEmpty()
  name: string
}
