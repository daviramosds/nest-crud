import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
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
}
