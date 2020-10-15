import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
  ) { }

  /**
   * Checks if the user is logged in an redirects it to the prosucts views if necessary. Otherwise redirects it to login if necessary.
   * @param next next router state
   * @param state current router state
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const nextPath = next.url[0].path;
    const logedIn = localStorage.getItem('logedIn') ? true : false;
    if (logedIn && nextPath === 'login') {
      this.router.navigate(['productos']);
      return false;
    }
    if (!logedIn && nextPath === 'productos') {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
