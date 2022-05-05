import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { this.gotoLogin();}

  
  ngOnInit(): void {
    
  }

  gotoLogin() {
    this.router.navigate(['home/login'])
  }


}
