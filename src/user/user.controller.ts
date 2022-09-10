import { Body, Controller } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  async create(@Body() createUserDTO: CreateUserDTO) {
    console.log(createUserDTO);

    return {
      message: 'user created',
    };
  }
}
