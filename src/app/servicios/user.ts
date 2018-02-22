
import { Injectable } from "@angular/core";
import {Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map"
import { Observable } from "rxjs/observable";
@Injectable()
export class UserServices{
	public user_identificado;
	constructor(
    private _http: Http
    ){
		
	}
	 //sacando el usuario
  entrar(user_to_login) {

      let json= JSON.stringify(user_to_login);
      let params = json;
      let headers = new Headers({"Content-Type":"application/json"});
      return this._http.post("http://localhost:3977/api/get-user",params,{headers:headers})
      .map(res => res.json());
  }
  getLogeo(){
    this.user_identificado = JSON.parse(localStorage.getItem("usuario"));
    return this.user_identificado;
  }


}