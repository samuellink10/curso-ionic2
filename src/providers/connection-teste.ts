import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ConnectionTeste provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConnectionTeste {

  constructor(public http: Http) {}
  getCep(): Promise<Response>{
    
  //  var url = "http://viacep.com.br/ws/61901190/json";
  //  var response  = this.http.get(url).map(res=> res.json);
  return  this.http.get('http://viacep.com.br/ws/61901190/json').toPromise();
}
}
