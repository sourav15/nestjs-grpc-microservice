import { Controller, Inject, Get } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private client: ClientProxy,
    private userService: UsersService,
  ) {}

  @Get()
  async getUsers() {
    return await this.userService.getUser();
  }
}
