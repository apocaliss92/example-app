import { Todo } from '@example-app/api-interfaces';
import { EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapterFactory } from '../../shared/classes/minimal-entity.state';
import * as TodosActions from './todos-actions';

export const featureStateKey = 'todos';

export interface State extends EntityState<Todo> {
  loading: boolean;
  errorMessage: string;
  total: number;
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapterFactory<Todo>('id', [{
  field: 'done',
  direction: 'ASC'
}]);

export const initialState: State = todoAdapter.getInitialState({
  loading: false,
  errorMessage: null,
  total: 0
});

const todosReducer = createReducer(
  initialState,

  on(
    TodosActions.loadTodos,
    TodosActions.addTodo,
    (state: State) => ({
      ...state,
      loading: true,
      errorMessage: null
    })),

  on(TodosActions.loadTodosSuccess, (state: State, { todos }) =>
    todoAdapter.setAll(todos, {
      ...state,
      loading: false,
      total: todos.length
    })
  ),

  on(TodosActions.loadTodosFailure, (state: State, { errorMessage }) => ({
    ...state,
    loading: false,
    errorMessage
  })),

  on(TodosActions.addTodoSuccess, (state: State, { todo }) =>
    todoAdapter.addOne(todo, {
      ...state,
      loading: false,
      total: state.total + 1
    }))
);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}

export const selectItems = todoAdapter.getSelectors().selectAll;
export const selectTotal = (state: State) => state.total;
export const selectLoading = (state: State) => state.loading;
