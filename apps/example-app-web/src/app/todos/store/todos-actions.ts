import { Todo, UpsertTodo } from '@example-app/api-interfaces';
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
  props<{ todo: UpsertTodo }>()
);

export const addTodoSuccess = createAction(
  `${TODOS_ACTIONS_PREFIX} Add Todo Success`,
  props<{ todo: Todo }>()
);

export const addTodoFailure = createAction(
  `${TODOS_ACTIONS_PREFIX} Add Todo Failure`,
  props<{ errorMessage: string }>()
);

export const updateTodo = createAction(
  `${TODOS_ACTIONS_PREFIX} Update Todo`,
  props<{ id: string; todo: UpsertTodo }>()
);

export const updateTodoSuccess = createAction(
  `${TODOS_ACTIONS_PREFIX} Update Todo Success`,
  props<{ todo: Todo }>()
);

export const updateTodoFailure = createAction(
  `${TODOS_ACTIONS_PREFIX} Update Todo Failure`,
  props<{ errorMessage: string }>()
);

export const deleteTodo = createAction(
  `${TODOS_ACTIONS_PREFIX} Delete Todo`,
  props<{ id: string }>()
);

export const deleteTodoSuccess = createAction(
  `${TODOS_ACTIONS_PREFIX} Delete Todo Success`,
  props<{ id: string }>()
);

export const deleteTodoFailure = createAction(
  `${TODOS_ACTIONS_PREFIX} Delete Todo Failure`,
  props<{ errorMessage: string }>()
);

export const markTodoAsDone = createAction(
  `${TODOS_ACTIONS_PREFIX} Mark Todo As Done`,
  props<{ id: string }>()
);

export const markTodoAsDoneSuccess = createAction(
  `${TODOS_ACTIONS_PREFIX} Mark Todo As Done Success`,
  props<{ todo: Todo }>()
);

export const markTodoAsDoneFailure = createAction(
  `${TODOS_ACTIONS_PREFIX} Mark Todo As Done Failure`,
  props<{ errorMessage: string }>()
);

export const markTodoAsNotDone = createAction(
  `${TODOS_ACTIONS_PREFIX} Mark Todo As Not Done`,
  props<{ id: string }>()
);

export const markTodoAsNotDoneSuccess = createAction(
  `${TODOS_ACTIONS_PREFIX} Mark Todo As Not Done Success`,
  props<{ todo: Todo }>()
);

export const markTodoAsNotDoneFailure = createAction(
  `${TODOS_ACTIONS_PREFIX} Mark Todo As Not Done Failure`,
  props<{ errorMessage: string }>()
);
