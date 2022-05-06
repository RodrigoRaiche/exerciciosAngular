import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LiberaLoginService } from '../libera-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private liberaLogin: LiberaLoginService) { }


  ngOnInit(): void {
  }
  islogged = this.liberaLogin.getlogin();

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.islogged) {
      this.router.navigate(['home/login'])
    }
    return this.islogged;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.islogged) {
      this.router.navigate(['home/login'])
    }
    return this.islogged;
  }
}
