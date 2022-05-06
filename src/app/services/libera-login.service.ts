import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LiberaLoginService {

  public isLoggedIn: boolean = false;

  constructor() { }

  public getlogin():boolean{
    return this.isLoggedIn;
  }

  public setlogin(liberaLogin:boolean){
    this.isLoggedIn = liberaLogin;
  }

}
