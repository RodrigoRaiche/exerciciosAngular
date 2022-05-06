import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidaLoginService } from '../valida-login.service';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate, CanLoad {

  constructor(private router: Router, private validaLogin: ValidaLoginService) { }

  ngOnInit(): void {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.validaLogin.getlogin()) {
      this.router.navigate(['informaremail'])
      return false;
    }
    return true

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.validaLogin.getlogin()) {
        this.router.navigate(['informaremail'])
        return false;
      }
      return true
    }

}
