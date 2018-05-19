import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class ObservableComponent implements OnDestroy {
  protected ngUnsubscribe$ = new Subject();

  constructor() {
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

}
