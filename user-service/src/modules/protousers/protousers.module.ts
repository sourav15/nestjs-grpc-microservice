import { Module } from '@nestjs/common';
import { ProtousersController } from './protousers.controller';

@Module({
  controllers: [ProtousersController]
})
export class ProtousersModule {}
