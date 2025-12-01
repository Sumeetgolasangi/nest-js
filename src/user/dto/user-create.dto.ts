import { isAlphanumeric, IsEmail, isNotEmpty, IsNotEmpty, isString, IsString, Matches } from "class-validator";

export class UserCreateDto {
   @IsString()
   @IsNotEmpty()
   name: string;

   @IsEmail({}, { message: "Must be email address" })
   email: string;

   @IsNotEmpty()
   @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
      message: "Password must contain uppercase, lowercase, number, special character and be at least 8 characters",
   })
   password: string;

}