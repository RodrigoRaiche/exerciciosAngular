import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidaLoginService {

  public isLoggedIn: boolean = false;

  constructor() { }

  public getlogin():boolean{
    const email:any = localStorage.getItem("email");
    if (email !=null){
      console.log(email)
      return true;
    }
    return this.isLoggedIn;
  }

  
}
