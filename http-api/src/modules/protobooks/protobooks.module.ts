import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProtobooksController } from './protobooks.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOOKPROTO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50051',
          package: 'bookproto',
          protoPath: join(__dirname, '../../../../proto/book/book.proto'),
        },
      },
    ]),
  ],
  controllers: [ProtobooksController],
})
export class ProtobooksModule {}
