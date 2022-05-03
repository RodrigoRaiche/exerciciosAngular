import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-geral',
  templateUrl: './home-geral.component.html',
  styleUrls: ['./home-geral.component.scss']
})
export class HomeGeralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  search(pesquisa:any) {

    console.log(pesquisa);
  }

}
