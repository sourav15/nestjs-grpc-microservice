import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './modules/books/books.module';
import { UsersModule } from './modules/users/users.module';
import { ProtobooksModule } from './modules/protobooks/protobooks.module';
import { ProtousersModule } from './modules/protousers/protousers.module';

@Module({
  imports: [BooksModule, UsersModule, ProtobooksModule, ProtousersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
