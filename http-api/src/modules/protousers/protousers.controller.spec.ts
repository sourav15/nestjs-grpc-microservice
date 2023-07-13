import { Test, TestingModule } from '@nestjs/testing';
import { ProtousersController } from './protousers.controller';

describe('ProtousersController', () => {
  let controller: ProtousersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProtousersController],
    }).compile();

    controller = module.get<ProtousersController>(ProtousersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
