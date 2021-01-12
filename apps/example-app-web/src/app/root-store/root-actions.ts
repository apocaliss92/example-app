import { Version } from '@example-app/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const ROOT_ACTIONS_PREFIX = 'Root';

export const goToTodos = createAction(`[${ROOT_ACTIONS_PREFIX}] Go To Todos`);

export const loadVersion = createAction(
  `${ROOT_ACTIONS_PREFIX} Load Version`
);

export const loadVersionSuccess = createAction(
  `${ROOT_ACTIONS_PREFIX} Load Version Success`,
  props<{ versionData: Version }>()
);

export const loadVersionFailure = createAction(
  `${ROOT_ACTIONS_PREFIX} Load Version Failure`,
  props<{ errorMessage: string }>()
);
