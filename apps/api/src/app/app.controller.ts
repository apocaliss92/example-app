import { Controller, Get } from '@nestjs/common';
import { ApiDefaultResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Version } from './dto/version';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiDefaultResponse({
    description: 'Get application version.',
    type: String
  })
  @Get('version')
  getVersion(): Version {
    return this.appService.getVersion();
  }
}
