import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient : HttpClient) { }

  private apiEndpoint : string = "https://viacep.com.br/ws/";
  private tipoRetorno : string = "/json/unicode/";

  public getCEP(cep : string){
    return this.httpClient.get(`${this.apiEndpoint}${cep}${this.tipoRetorno}`);
  }

}
