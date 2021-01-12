import { InjectionToken } from '@angular/core';
import { Action, ActionReducer, ActionReducerMap, createReducer, MetaReducer, on } from '@ngrx/store';
import * as fromTodos from '../todos/store/todos-reducers';
import * as RootActions from './root-actions';

export const commonKey = 'common';

export interface CommonState {
  version: string;
  release: string;
}

export interface RootState {
  [commonKey]: CommonState;
  [fromTodos.featureStateKey]: fromTodos.State;
}

export const initialState: CommonState = {
  release: '',
  version: ''
};

export const commonReducer = createReducer(initialState,
  on(RootActions.loadVersionSuccess, (state: CommonState, { versionData }) => ({
      ...state,
      version: versionData.version,
      release: versionData.release
    })
  ));

export function reducer(state: CommonState | undefined, action: Action) {
  return commonReducer(state, action);
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<Partial<RootState>, Action>>(
  'Root reducers token',
  {
    factory: () => ({
      [commonKey]: reducer
    })
  }
);

export const getStateLogger = () => (
  actionReducer: ActionReducer<unknown>
): ActionReducer<unknown> => {
  const blackListLogActions = [
    'ngrx/forms',
    '@ngrx/store-devtools',
    '@ngrx/router-store'
  ];
  return (state, action) => {
    const nextState = actionReducer(state, action);
    let log = true;
    blackListLogActions.forEach(text => {
      if (action.type.startsWith(text)) {
        log = false;
      }
    });
    if (log) {
      console.groupCollapsed(action.type);
      console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
      console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
      console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
      console.groupEnd();
    }
    return nextState;
  };
};

export const metaReducers: MetaReducer<unknown>[] = [
  getStateLogger()
];
