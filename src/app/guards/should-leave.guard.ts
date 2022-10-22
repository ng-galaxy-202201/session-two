import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ShouldLeave } from '../interfaces/should-leave.interface';

@Injectable({
  providedIn: 'root'
})
export class ShouldLeaveGuard implements CanDeactivate<ShouldLeave> {
  canDeactivate(
    component: ShouldLeave,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.shouldLeave();
  }
}
