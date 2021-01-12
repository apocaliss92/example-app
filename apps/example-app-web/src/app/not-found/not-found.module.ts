import { NgModule } from '@angular/core';
import { SharedModule } from 'apps/example-app-web/src/app/shared/shared.module';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [NotFoundRoutingModule, SharedModule]
})
export class NotFoundModule {}
