import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { StatusService } from 'apps/example-app-web/src/app/shared/services/status.service';
import { of } from 'rxjs';
import { catchError, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import * as RootActions from './root-actions';

@Injectable()
export class RootEffects {
  initApplicationSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      take(1),
      mergeMap(_ => {
        return of(RootActions.loadVersion());
      })
    );
  });

  loadVersion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RootActions.loadVersion),
      switchMap(_ =>
        this.statusService.getVersion().pipe(
          mergeMap(versionData =>
            of(RootActions.loadVersionSuccess({ versionData }))
          ),
          catchError((error: Error) => {
            console.error(error);
            return of(
              RootActions.loadVersionFailure({
                errorMessage: error.message
              })
            );
          })
        )
      )
    );
  });

  openItem$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(RootActions.goToTodos),
        tap(_ => this.router.navigate([`/todos`]))
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router, private statusService: StatusService) {}
}
