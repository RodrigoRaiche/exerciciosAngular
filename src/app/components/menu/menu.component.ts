import { Component, OnInit } from '@angular/core';
import { LiberaLoginService } from 'src/app/services/libera-login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private liberaLogin: LiberaLoginService) { }

  ngOnInit(): void {
  }

  desabilitaLogin(){
    this.liberaLogin.setlogin(false);
  }

     

}
