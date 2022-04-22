import { Component, OnInit } from '@angular/core';
import { ComunicaAPIService } from 'src/app/services/comunica-api.service';

@Component({
  selector: 'app-testa-api',
  templateUrl: './testa-api.component.html',
  styleUrls: ['./testa-api.component.scss']
})
export class TestaAPIComponent implements OnInit {

  headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  }

  result: any;

  constructor(private _service1: ComunicaAPIService) { }

  ngOnInit(): void {
    this._service1.requisicaoGet(351, this.headers).then((data: any) => {
      this.result = data;
    }).catch(console.log)


  }

}
