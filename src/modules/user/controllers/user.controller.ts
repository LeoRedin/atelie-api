import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { routesV1 } from '@src/configs/app.routes';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { CreateUserDTO, UpdateUserDTO } from '../dtos/user-dtos';
import { ApiOperation } from '@nestjs/swagger';

@Controller(routesV1.version)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Create a user' })
  @Post(routesV1.user.root)
  async createUser(@Body() createUserDto: CreateUserDTO): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @Get(routesV1.user.root)
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Get a single user' })
  @Get(routesV1.user.single)
  async getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.getUserById(id);
  }

  @ApiOperation({ summary: 'Update user' })
  @Put(routesV1.user.single)
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDTO,
  ): Promise<User> {
    return this.userService.updateUser(updateUserDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @Delete(routesV1.user.single)
  async deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
