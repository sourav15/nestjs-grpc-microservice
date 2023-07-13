import { Controller, OnModuleInit, Inject, Get } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface BookService {
  getBooks({}): Observable<any>;
}

@Controller('protobooks')
export class ProtobooksController implements OnModuleInit {
  private bookService: BookService;

  constructor(@Inject('BOOKPROTO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.bookService = this.client.getService<BookService>('BookService');
  }

  @Get()
  async getProtoBooks() {
    return this.bookService.getBooks(null);
  }
}
