import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller('books')
export class BooksController {
  constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

  @MessagePattern({ cmd: 'getBooks' })
  async getBooks() {
    const books = [{ id: 1, name: 'book name' }];
    const pattern = { cmd: 'getUserFromService' };
    const userRsponse = this.client.send(pattern, {});
    const user = await lastValueFrom(userRsponse);
    return { books, user };
  }
}
