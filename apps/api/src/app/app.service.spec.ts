import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
      imports: [ConfigModule]
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('service', () => {
    it('exists', () => {
      expect(service).toBeTruthy();
    });
  });

  // describe('getVersion', () => {
  //  it('should return the version', () => {
  //  expect(service.getVersion()).toEqual(version);
  //  });
  //  });
});
