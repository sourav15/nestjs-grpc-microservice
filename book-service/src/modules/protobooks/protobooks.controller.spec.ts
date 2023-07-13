import { Test, TestingModule } from '@nestjs/testing';
import { ProtobooksController } from './protobooks.controller';

describe('ProtobooksController', () => {
  let controller: ProtobooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProtobooksController],
    }).compile();

    controller = module.get<ProtobooksController>(ProtobooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
