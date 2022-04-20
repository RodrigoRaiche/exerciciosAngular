import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-busca',
  templateUrl: './input-busca.component.html',
  styleUrls: ['./input-busca.component.scss']
})
export class InputBuscaComponent implements OnInit {

  pesquisa = '';

  constructor() { }

  ngOnInit(): void {
  }


  keyPress(event: any) {
    console.log('--evento--');
    console.log(this.pesquisa);
  }

  keyUp(event: any) {
    console.log('--keyUp--');
    console.log(this.pesquisa);
  }

}
