import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Render('index.hbs')
  async getAll() {
    const users = await this.usersService.findAll();

    return { users };
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<string> {
    const user = await this.usersService.create(createUserDto);

    console.log(user);

    return 'Hello';
  }
}
