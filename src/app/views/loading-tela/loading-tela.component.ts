import { Component, OnInit } from '@angular/core';
import { ComunicaAPIService } from 'src/app/services/comunica-api.service';

@Component({
  selector: 'app-loading-tela',
  templateUrl: './loading-tela.component.html',
  styleUrls: ['./loading-tela.component.scss']
})
export class LoadingTelaComponent implements OnInit {

  headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  }

  result: any;
  vLoading = '';
  mostraLoading = true;
  
  constructor(private _service1: ComunicaAPIService) { }

  ngOnInit(): void {
    this.realizaGet();
  }

 async realizaGet(){
  this.vLoading = 'Loading';
  await this._service1.requisicaoGet(349, this.headers).then((data: any) => {
    this.result = JSON.stringify(data);
    this.mostraLoading = false;
    this.vLoading = 'Carregado';
  }).catch((data: any) => {
    this.vLoading = 'Problema no acesso a API';
  })
 

 }

}
