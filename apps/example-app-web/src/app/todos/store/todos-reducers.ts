import { Todo } from '@example-app/api-interfaces';
import { EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapterFactory } from '../../shared/classes/minimal-entity.state';
import * as TodosActions from './todos-actions';

export const featureStateKey = 'todos';

export interface State extends EntityState<Todo> {
  loading: boolean;
  errorMessage: string;
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapterFactory<Todo>('id', [{
  field: 'id',
  direction: 'ASC'
}]);

export const initialState: State = todoAdapter.getInitialState({
  loading: false,
  errorMessage: null
});

const todosReducer = createReducer(
  initialState,

  on(
    TodosActions.loadTodos,
    TodosActions.addTodo,
    TodosActions.deleteTodo,
    TodosActions.markTodoAsDone,
    TodosActions.markTodoAsNotDone,
    (state: State) => ({
      ...state,
      loading: true,
      errorMessage: null
    })),

  on(TodosActions.loadTodosSuccess, (state: State, { todos }) =>
    todoAdapter.setAll(todos, {
      ...state,
      loading: false
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
      loading: false
    })),

  on(TodosActions.deleteTodoSuccess, (state: State, { id }) =>
    todoAdapter.removeOne(id, {
      ...state,
      loading: false
    })),

  on(
    TodosActions.markTodoAsDoneSuccess,
    TodosActions.markTodoAsNotDoneSuccess,
    (state: State, { todo }) =>
      todoAdapter.updateOne({ id: todo.id, changes: { ...todo } }, {
        ...state,
        loading: false
      }))
);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}

export const selectItems = todoAdapter.getSelectors().selectAll;
export const selectLoading = (state: State) => state.loading;
