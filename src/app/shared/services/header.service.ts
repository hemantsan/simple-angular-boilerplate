import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  setPageHeader$: Observable<any>;
  private setPageHeaderSubject = new Subject<any>();

  constructor(private route: Router) {
    this.setPageHeader$ = this.setPageHeaderSubject.asObservable();
  }

  setPageHeader() {
    this.setPageHeaderSubject.next(this.getPath());
  }

  getPath() {
    this.route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        return val.url;
      }
    });

    return this.route.url;
  }
}
