import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [AppController],
      providers: [AppService]
    }).compile();
  });

  describe('controller', () => {
    it('exists', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController).toBeTruthy();
    });
  });
  // describe('getVersion', () => {
  //   it('should return the version', () => {
  //     const appController = app.get<AppController>(AppController);
  //     expect(appController.getVersion()).toEqual({ version, release: undefined });
  //   });
  // });
});
