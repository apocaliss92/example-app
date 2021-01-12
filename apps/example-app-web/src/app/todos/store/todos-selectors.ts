import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from './todos-reducers';

export const selectTodosFeatureState = createFeatureSelector<fromTodos.State>(
  fromTodos.featureStateKey
);

export const selectItems = createSelector(selectTodosFeatureState, fromTodos.selectItems);
export const selectTotal = createSelector(selectTodosFeatureState, fromTodos.selectTotal);
export const selectLoading = createSelector(
  selectTodosFeatureState,
  fromTodos.selectLoading
);

export const selectTodosDone = createSelector(selectItems, items => items.filter(item => item.done === true));
export const selectTodosNotDone = createSelector(selectItems, items => items.filter(item => item.done === false));
