import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  template: ''
})
export abstract class BaseComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];

  ngOnDestroy() {
    if (this.subscriptions?.length) {
      this.subscriptions.forEach(subscription => {
        this.unsubscribeFromSubscription(subscription);
      });
    }
  }

  protected subscribeToObservable<TObservable>(
    observable: Observable<TObservable>,
    subscriber?: (...props: any) => void
  ): Subscription {
    const subscription = observable.subscribe(subscriber);
    this.addSubscription(subscription);
    return subscription;
  }

  private addSubscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  private unsubscribeFromSubscription(subscription: Subscription) {
    if (!subscription.closed) {
      subscription.unsubscribe();
    }
  }
}
