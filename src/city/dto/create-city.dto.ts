import { IsNotEmpty, IsString } from "class-validator"
import { District } from "../../district/district.entity"
import { State } from "../../state/state.entity"
import { ApiProperty } from "@nestjs/swagger"

export class CreateCityDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  state: State

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  district: District[]
}
