import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

  async getUser() {
    const pattern = { cmd: 'getUser' };
    const userResponse = this.client.send(pattern, {});
    const user = await lastValueFrom(userResponse);
    return user;
  }
}
