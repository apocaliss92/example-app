import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Version } from 'apps/api/src/app/dto/version';
import { version } from '../../../../package.json';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {
  }

  getVersion(): Version {
    return {
      version,
      release: this.configService.get('HEROKU_RELEASE_VERSION')
    };
  }
}
