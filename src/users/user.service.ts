import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { UserDto } from "./dto/user.dto";
import { plainToInstance } from "class-transformer";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
  ) { }

  async save(userDto: UserDto): Promise<UserDto> {
    const savedUser = await this.userRepository.save(userDto)
    return plainToInstance(UserDto, savedUser, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: string, userDto: UserDto): Promise<{ result: string }> {
    await this.userRepository.update(id, userDto)
    return {
      result: "success"
    }
  }

  async findOne(id: string): Promise<UserDto> {
    const foundUser = await this.userRepository.findOneBy({ id: id })
    return plainToInstance(UserDto, foundUser, {
      excludeExtraneousValues: true,
    });
  }

  async softDelete(id: string): Promise<{ result: string }> {
    await this.userRepository.softDelete(id)
    return {
      result: "success"
    }
  }
}