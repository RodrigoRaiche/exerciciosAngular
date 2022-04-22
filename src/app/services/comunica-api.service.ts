import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ComunicaAPIService {

  constructor(private http: HttpClient) { }

  public requisicaoGet(codigoFilme: any, headers: any) {
    console.log('entrou na API')
    return new Promise((resolve, reject) => {
      console.log('Fez chamada')
      // const path = `${environment.filmesAPI}+${codigoFilme}?api_key=environment.apiKey`
      this.http.get(environment.filmesAPI + codigoFilme + '?api_key='+ environment.apiKey, { headers: headers }).toPromise().then((data: any) => {
        resolve(data)
      }).catch(err => {
        console.log('-- catch no get --')
        console.log(err)
        reject(err)
        // resolve(null)
      })

    });
  }
}
