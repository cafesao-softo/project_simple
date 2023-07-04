import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"
export class ReadDistrictParamsDTO {
  @ApiProperty({
    example: 1
  })
  @IsString()
  @IsNotEmpty()
  id: string
}

export class ReadDistrictServiceDTO {
  id?: string
  cityName?: string
  districtName?: string
}
