import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class IUpdateStateBodyDTO {
  @ApiProperty({
    example: "Santa Catarina"
  })
  @IsString()
  @IsNotEmpty()
  name: string
}

export class IUpdateStateParamsDTO {
  @ApiProperty({
    example: 1
  })
  @IsString()
  @IsNotEmpty()
  id: string
}
