import { Component, OnInit } from '@angular/core';
import { ComunicaAPIService } from 'src/app/services/comunica-api.service';

@Component({
  selector: 'app-filme-mais-popular',
  templateUrl: './filme-mais-popular.component.html',
  styleUrls: ['./filme-mais-popular.component.scss']
})
export class FilmeMaisPopularComponent implements OnInit {

  headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  }

  result: any;
  imgFilme = ''

  constructor(private _service1: ComunicaAPIService) { }

  
  ngOnInit(): void {
    this.realizaGet();
  }

 async realizaGet(){
  await this._service1.requisicaoGetPopular(this.headers).then((data: any) => {
    this.result = data.results[1];
    this.imgFilme = 'https://image.tmdb.org/t/p/original/' +  this.result.poster_path;
    
  }).catch((data: any) => {console.log })
 } 
  
}
