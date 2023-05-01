import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '206189323',
      database: 'hieuph_community',
      entities: [UserEntity],
      logging: "all",
      synchronize: true,
    }),
    UsersModule
  ],
})
export class AppModule {}
