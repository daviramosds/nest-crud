import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from './user.service';
import { faker } from '@faker-js/faker';
import { CreateUserDTO } from './dto';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user', async () => {
    const userData: CreateUserDTO = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    await service.create(userData);
  });

  it('shoud list all users', async () => {
    await service.getAll();
  });

  it('shoud list the user with id 1', async () => {
    await service.getOne(1);
  });

  it('shoud update the user with id 1', async () => {
    const userData: any = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    await service.update(1, userData);
  });

  it('shoud delete the user with id 1', async () => {
    await service.delete(1);
  });
});
