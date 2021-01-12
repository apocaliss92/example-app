import { createFeatureSelector } from '@ngrx/store';
import { commonKey, CommonState, RootState } from './root-reducers';

export const selectCommonState = createFeatureSelector<RootState, CommonState>(commonKey);
