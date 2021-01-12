import { Todo } from '@example-app/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const TODOS_ACTIONS_PREFIX = '[Todos]';

export const loadTodos = createAction(
  `${TODOS_ACTIONS_PREFIX} Load Todos`
);

export const loadTodosSuccess = createAction(
  `${TODOS_ACTIONS_PREFIX} Load Todos Success`,
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  `${TODOS_ACTIONS_PREFIX} Load Todos Failure`,
  props<{ errorMessage: string }>()
);

export const addTodo = createAction(
  `${TODOS_ACTIONS_PREFIX} Add Todo`,
  props<{ todo: Todo }>()
);

export const addTodoSuccess = createAction(
  `${TODOS_ACTIONS_PREFIX} Add Todo Success`,
  props<{ todo: Todo }>()
);

export const addTodoFailure = createAction(
  `${TODOS_ACTIONS_PREFIX} Add Todo Failure`,
  props<{ errorMessage: string }>()
);
