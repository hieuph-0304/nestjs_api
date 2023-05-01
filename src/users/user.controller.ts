import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  @Post()
  createUser(@Body() userDto: UserDto): Promise<UserDto> {
    return this.userService.save(userDto);
  }

  @Put(":id")
  updateUserById(@Param('id') id: string, @Body() user: UserDto): Promise<{ result: string }> {
    return this.userService.update(id, user);
  }

  @Get(":id")
  getUserById(@Param('id') id: string): Promise<UserDto> {
    return this.userService.findOne(id);
  }

  @Delete(":id")
  deleteUserById(@Param('id') id: string): Promise<{ result: string }> {
    return this.userService.softDelete(id);
  }
}