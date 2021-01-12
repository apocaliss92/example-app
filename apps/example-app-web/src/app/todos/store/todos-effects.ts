import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RootState } from 'apps/example-app-web/src/app/root-store';
import { TodosService } from 'apps/example-app-web/src/app/todos/services/todos.service';
import { TodosActions } from 'apps/example-app-web/src/app/todos/store/index';
import { of } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';

@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.loadTodos),
      switchMap(_ =>
        this.todosService.getTodos().pipe(
          mergeMap(todos =>
            of(TodosActions.loadTodosSuccess({ todos }))
          ),
          catchError((error: Error) => {
            console.error(error);
            return of(
              TodosActions.loadTodosFailure({
                errorMessage: error.message
              })
            );
          })
        )
      )
    );
  });

  addTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.addTodo),
      switchMap(({ todo: todoToAdd }) =>
        this.todosService.addTodo(todoToAdd).pipe(
          mergeMap(todo =>
            of(TodosActions.addTodoSuccess({ todo }))
          ),
          catchError((error: Error) => {
            console.error(error);
            return of(
              TodosActions.addTodoFailure({
                errorMessage: error.message
              })
            );
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<RootState>,
    private todosService: TodosService
  ) {}
}
