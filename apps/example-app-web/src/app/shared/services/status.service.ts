import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Version } from '@example-app/api-interfaces';
import { environment } from 'apps/example-app-web/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class StatusService {

  constructor(private httpClient: HttpClient) { }

  getVersion(): Observable<Version> {
    return this.httpClient.get<Version>(`./${environment.apiEndpoint}/version`);
  }
}
