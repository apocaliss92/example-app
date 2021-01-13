import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconDefinition } from '@ant-design/icons-angular';
import { CheckSquareTwoTone, CloseSquareTwoTone, DeleteTwoTone } from '@ant-design/icons-angular/icons';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { LayoutComponent } from './components/layout/layout.component';
import { StatusService } from './services/status.service';

const icons: IconDefinition[] = [DeleteTwoTone, CloseSquareTwoTone, CheckSquareTwoTone];

const modules = [NzLayoutModule, NzAffixModule, NzMenuModule,
  CommonModule, HttpClientModule, NzButtonModule, NzResultModule, ReactiveComponentModule,
  NzGridModule, NzListModule, NzTypographyModule, NzCardModule, NzFormModule, ReactiveFormsModule, NzInputModule
];

@NgModule({
  declarations: [LayoutComponent],
  imports: [RouterModule, ...modules, NzIconModule.forRoot(icons)],
  exports: [LayoutComponent, ...modules, NzIconModule],
  providers: [StatusService]
})
export class SharedModule {}
