import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '@example-app/api-interfaces';
import { Store } from '@ngrx/store';
import { BaseComponent } from 'apps/example-app-web/src/app/shared/components/base.component';
import { TodosActions, TodosSelectors } from 'apps/example-app-web/src/app/todos/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TodosComponent extends BaseComponent {
  todosDone$: Observable<Todo[]>;
  todosNotDone$: Observable<Todo[]>;
  adding$: Observable<boolean>;
  formGroup: FormGroup;

  constructor(private store: Store) {
    super();
    this.todosDone$ = this.store.select(TodosSelectors.selectTodosDone);
    this.todosNotDone$ = this.store.select(TodosSelectors.selectTodosNotDone);
    this.adding$ = this.store.select(TodosSelectors.selectLoading);
    this.store.dispatch(TodosActions.loadTodos());
    this.formGroup = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('')
    });
  }

  addTodo() {
    this.store.dispatch(TodosActions.addTodo({ todo: this.formGroup.value }));
    this.formGroup.reset();
  }
}
