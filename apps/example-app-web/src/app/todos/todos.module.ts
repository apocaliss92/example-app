import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'apps/example-app-web/src/app/shared/shared.module';
import { TodosComponent } from 'apps/example-app-web/src/app/todos/containers/dashboard/todos.component';
import { TodosService } from 'apps/example-app-web/src/app/todos/services/todos.service';
import { TodosStoreModule } from 'apps/example-app-web/src/app/todos/store/todos-store.module';
import { TodosRoutingModule } from 'apps/example-app-web/src/app/todos/todos-routing.module';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    TodosStoreModule,
    SharedModule
  ],
  providers: [TodosService]
})
export class TodosModule {}
