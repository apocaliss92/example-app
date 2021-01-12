import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodosEffects } from './todos-effects';
import { featureStateKey, reducer } from './todos-reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(featureStateKey, reducer),
    EffectsModule.forFeature([TodosEffects])
  ]
})
export class TodosStoreModule {}
