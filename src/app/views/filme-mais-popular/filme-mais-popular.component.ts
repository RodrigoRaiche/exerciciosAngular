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
  arrayFilmes = [];
  index = 1;

  constructor(private _service1: ComunicaAPIService) { }

  
  ngOnInit(): void {
    this.realizaGet();
  }

 async realizaGet(){
  await this._service1.requisicaoGetPopular(this.headers).then((data: any) => {
    this.arrayFilmes = data.results;
    this.result = data.results[this.index];
    this.imgFilme = 'https://image.tmdb.org/t/p/original/' +  this.result.poster_path;
    
  }).catch((data: any) => {console.log })
 } 

 acaoRetrocede(){
    if (this.index === 1){
      alert('Não é possível retroceder');
    }
    else{
      this.index--;
      this.result = this.arrayFilmes[this.index];
      this.imgFilme = 'https://image.tmdb.org/t/p/original/' +  this.result.poster_path;
    }
 }

 acaoAvanca(){
  if (this.index === 3){
    alert('Não é possível avançar');
  }
  else{
    this.index++;
    this.result = this.arrayFilmes[this.index];
    this.imgFilme = 'https://image.tmdb.org/t/p/original/' +  this.result.poster_path;
  }


 }
  
}
