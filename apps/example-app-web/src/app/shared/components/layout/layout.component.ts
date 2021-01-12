import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Version } from '@example-app/api-interfaces';
import { Store } from '@ngrx/store';
import { RootSelectors, RootState } from 'apps/example-app-web/src/app/root-store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {
  year: number;
  versionData$: Observable<Version>;

  constructor(public router: Router, private store: Store<RootState>) {
    this.year = new Date().getFullYear();
    this.versionData$ = this.store.select(RootSelectors.selectCommonState).pipe(map(({ version, release }) => ({
      release,
      version
    })));
  }

}
