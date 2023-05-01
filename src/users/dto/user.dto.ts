import { Expose, Transform } from "class-transformer";

export class UserDto{
  firstName: string
  lastName: string

  @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
  @Expose()
  fullName: string

  @Expose()
  isActive: boolean
}