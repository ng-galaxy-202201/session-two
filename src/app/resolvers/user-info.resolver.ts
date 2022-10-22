import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { UserInfo } from '../interfaces/user-info.interface';

@Injectable({
  providedIn: 'root'
})
export class UserInfoResolver implements Resolve<UserInfo> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInfo> {
    const studentId = route.paramMap.get('studentId')
    return of({ username: 'Luis' })
    .pipe(delay(3000));
  }
}
