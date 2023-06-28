import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class UpdateCityDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string
}
