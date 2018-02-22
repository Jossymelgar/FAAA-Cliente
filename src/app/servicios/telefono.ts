
import { Injectable } from "@angular/core";
import {Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map"
import { Observable } from "rxjs/observable";
@Injectable()
export class TelefonoServices{
	constructor(
    private _http: Http
    ){
		
	}
 
  registrartelefono(telefono){
    let params =JSON.stringify(telefono);
    let headers = new Headers({"Content-Type":"application/json"});
    return this._http.post("http://localhost:3977/api/save-telefono",params,{headers:headers})
      .map(res => res.json());
  }
  sacartelefono(){
    
    let headers = new Headers({"Content-Type":"application/json"});
    console.log("entre al  servicio de departamento");
    return this._http.post("http://localhost:3977/api/get-telefono",{headers:headers})
      .map(res => res.json());
  }
  eliminartelefono(telefono){
    let params =JSON.stringify(telefono);
    let headers = new Headers({"Content-Type":"application/json"});
    
    return this._http.delete("http://localhost:3977/api/delete-telefono/"+telefono,{headers:headers})
      .map(res => res.json());
  }
  //falta
    updateDeparatmento(direccion){
    let params =JSON.stringify(direccion);
    let headers = new Headers({"Content-Type":"application/json"});
    
    return this._http.post("http://localhost:3977/api/update-direccion/"+direccion._id,params,{headers:headers})
      .map(res => res.json());
  }

}