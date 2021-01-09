import { Test } from '@nestjs/testing';
import { version } from '../../../../package.json';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService]
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getVersion', () => {
    it('should return the version', () => {
      expect(service.getVersion()).toEqual({ version });
    });
  });
});
