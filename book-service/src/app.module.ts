import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './modules/books/books.module';
import { ProtobooksModule } from './modules/protobooks/protobooks.module';

@Module({
  imports: [BooksModule, ProtobooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
