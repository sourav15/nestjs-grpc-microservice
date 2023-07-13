import { Controller, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { Observable, lastValueFrom } from 'rxjs';

interface UserService {
  getUsers({}): Observable<any>;
}

@Controller('protobooks')
export class ProtobooksController implements OnModuleInit {
  private userService: UserService;

  constructor(@Inject('USERPROTO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserService>('UserService');
  }

  @GrpcMethod('BookService', 'getBooks')
  async getBooks(): Promise<any> {
    const userResponse = this.userService.getUsers(null);
    const user = await lastValueFrom(userResponse);
    return {
      books: [
        {
          id: 1,
          title: 'First book',
          description: 'This is the description for the first book',
          author: user.users[0],
        },
        {
          id: 2,
          title: 'Second book',
          description: 'This is the description for the second book',
          author: user.users[0],
        },
      ],
    };
  }
}
