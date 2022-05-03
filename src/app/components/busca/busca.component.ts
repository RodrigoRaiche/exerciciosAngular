import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  @Output('pesquisa') search: EventEmitter<any> = new EventEmitter<any>();
  inputPesquisa:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  keyUp(event: any) {
//    console.log('--keyUp--');
  //  console.log(this.inputPesquisa);
    this.search.emit(this.inputPesquisa)
    
  }
 

  
}
