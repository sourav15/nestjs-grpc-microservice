import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ProtousersModule } from './modules/protousers/protousers.module';

@Module({
  imports: [UsersModule, ProtousersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
