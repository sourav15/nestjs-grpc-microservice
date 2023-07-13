import { Controller, Inject, Get } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('books')
export class BooksController {
  constructor(@Inject('BOOK_SERVICE') private client: ClientProxy) {}

  @Get()
  async getBooks() {
    const pattern = { cmd: 'getBooks' };
    return this.client.send(pattern, {});
  }
}
