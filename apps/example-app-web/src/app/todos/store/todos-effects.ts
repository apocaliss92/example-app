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

  updateTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.updateTodo),
      switchMap(({ todo: todoToUpdate, id }) =>
        this.todosService.updateTodo(id, todoToUpdate).pipe(
          mergeMap(todo =>
            of(TodosActions.updateTodoSuccess({ todo }))
          ),
          catchError((error: Error) => {
            console.error(error);
            return of(
              TodosActions.updateTodoFailure({
                errorMessage: error.message
              })
            );
          })
        )
      )
    );
  });

  deleteTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.deleteTodo),
      switchMap(({ id }) =>
        this.todosService.deleteTodo(id).pipe(
          mergeMap(todo =>
            of(TodosActions.deleteTodoSuccess())
          ),
          catchError((error: Error) => {
            console.error(error);
            return of(
              TodosActions.deleteTodoFailure({
                errorMessage: error.message
              })
            );
          })
        )
      )
    );
  });

  markTodoAsDone$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.markTodoAsDone),
      switchMap(({ id }) =>
        this.todosService.markAsDone(id).pipe(
          mergeMap(todo =>
            of(TodosActions.markTodoAsDoneSuccess({ todo }))
          ),
          catchError((error: Error) => {
            console.error(error);
            return of(
              TodosActions.markTodoAsDoneFailure({
                errorMessage: error.message
              })
            );
          })
        )
      )
    );
  });

  markTodoAsNotDone$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.markTodoAsNotDone),
      switchMap(({ id }) =>
        this.todosService.markAsDone(id).pipe(
          mergeMap(todo =>
            of(TodosActions.markTodoAsNotDoneSuccess({ todo }))
          ),
          catchError((error: Error) => {
            console.error(error);
            return of(
              TodosActions.markTodoAsNotDoneFailure({
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
