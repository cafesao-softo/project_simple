import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"
import { City } from "src/city/city.entity"

export class CreateStateDTO {
  @ApiProperty({
    example: "são paulo"
  })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  city: City[]
}
