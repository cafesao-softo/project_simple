import { IsNotEmpty, IsString } from "class-validator"
import { District } from "../../district/district.entity"
import { State } from "../../state/state.entity"

export class CreateCityDTO {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  state: State

  @IsString()
  @IsNotEmpty()
  district: District[]
}
