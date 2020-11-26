import { IsEmail, IsString, IsNumber } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsNumber()
  public age: number;

  @IsString()
  public phoneNumber: string;
}
