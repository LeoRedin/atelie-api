import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDTO, UpdateUserDTO } from '../dtos/user-dtos';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(createUser: CreateUserDTO): Promise<User> {
    console.log(this.userRepository.createUser);

    return await this.userRepository.createUser(createUser);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.getAllUsers();
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.getUserById(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async updateUser(updateUser: UpdateUserDTO): Promise<User> {
    const updatedUser = await this.userRepository.updateUser(updateUser);

    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${updateUser.id} not found`);
    }

    return updatedUser;
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.userRepository.getUserById(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    await this.userRepository.deleteUser(id);
  }
}
