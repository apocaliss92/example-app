import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Version } from '@example-app/api-interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  version$ = this.http
    .get<Version>('/api/version');

  constructor(private http: HttpClient) {}
}
