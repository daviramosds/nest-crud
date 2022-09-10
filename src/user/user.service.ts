import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDTO } from './dto';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDTO) {
    const { name, email, password } = dto;

    const newUser = await this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return {
      user: newUser,
    };
  }

  async getAll() {
    const users = await this.prisma.user.findMany();
    return { users: users };
  }

  async getOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: +id,
      },
    });

    return { user: user };
  }

  async update(id: number, dto: UpdateUserDTO) {
    const { name, email, password } = dto;

    const user = await this.prisma.user.update({
      where: {
        id: +id,
      },
      data: {
        name,
        email,
        password,
      },
    });

    return { user: user };
  }

  async delete(id: number) {
    await this.prisma.user.delete({
      where: {
        id: +id,
      },
    });

    return { message: 'user deleted' };
  }
}
