import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadService {
  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor() {}

  show() {
    this._loading.next(true);
  }

  hide() {
    this._loading.next(false);
  }

  // loading: BehaviorSubject<boolean>;

  // constructor() {
  //   this.loading = new BehaviorSubject<boolean>(false);

  // }

  // getLoading() {
  //   return this.loading.getValue();
  // }

  // getLoad(): Observable<boolean> {
  //   return this.loading.asObservable();
  // }

  // startLoading() {
  //   this.loading.next(true);
  // }

  // finishLoading() {
  //   this.loading.next(false);
  // }
}
