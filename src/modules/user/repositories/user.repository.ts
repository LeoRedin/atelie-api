import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDTO, UpdateUserDTO } from '../dtos/user-dtos';

export class UserRepository extends Repository<User> {
  async createUser(createUser: CreateUserDTO): Promise<User> {
    const user = this.create(createUser);
    return await this.save(user);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.find();
  }

  async getUserById(id: number): Promise<User | null> {
    return await this.findOneBy({ id });
  }

  async updateUser(updateUser: UpdateUserDTO): Promise<User | undefined> {
    const user = await this.getUserById(updateUser.id);

    if (user) {
      user.email = updateUser.email;
      user.password = updateUser.password;
      return await this.save(user);
    }

    return undefined;
  }

  async deleteUser(id: number): Promise<void> {
    await this.delete(id);
  }
}
