import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from './user.service';
import { faker } from '@faker-js/faker';
import { CreateUserDTO } from './dto';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;
  let id: number;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, PrismaService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should create a new user', async () => {
    const userData: CreateUserDTO = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const { user } = await controller.create(userData);
    id = user.id;
  });

  it('shoud list all users', async () => {
    await controller.getAll();
  });

  it(`shoud list the created user`, async () => {
    await controller.getOne(id);
  });

  it('shoud update the created user', async () => {
    const userData: any = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    await controller.update(id, userData);
  });

  it('shoud delete the created user', async () => {
    await controller.delete(id);
  });
});
