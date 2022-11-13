import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'bmdb-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent implements OnDestroy {
  private destroyed$ = new Subject<boolean>();

  takeUntilDestroyed() {
    return takeUntil(this.destroyed$);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
