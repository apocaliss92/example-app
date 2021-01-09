import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LaptopOutline, NotificationOutline, UserOutline } from '@ant-design/icons-angular/icons';
import { NzBreadCrumbModule, NzLayoutModule, NzMenuModule } from 'ng-zorro-antd';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

const icons = [UserOutline, LaptopOutline, NotificationOutline];

@NgModule({
  imports: [NzIconModule, BrowserModule, HttpClientModule, NzLayoutModule, NzMenuModule, NzBreadCrumbModule, BrowserAnimationsModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class SharedModule {
}
