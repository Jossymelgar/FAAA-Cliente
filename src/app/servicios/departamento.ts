
import { Injectable } from "@angular/core";
import {Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map"
import { Observable } from "rxjs/observable";
@Injectable()
export class departamentoServices{
	constructor(
    private _http: Http
    ){
		
	}
 
  registrarDepartamento(departamento){
    let params =JSON.stringify(departamento);
    let headers = new Headers({"Content-Type":"application/json"});
    return this._http.post("http://localhost:3977/api/save-departamento",params,{headers:headers})
      .map(res => res.json());
  }
  sacarDepartamentos(){
    
    let headers = new Headers({"Content-Type":"application/json"});
    console.log("entre al  servicio de departamento");
    return this._http.post("http://localhost:3977/api/get-departamento",{headers:headers})
      .map(res => res.json());
  }
  eliminarDepartamento(departamento){
    let params =JSON.stringify(departamento);
    let headers = new Headers({"Content-Type":"application/json"});
    
    return this._http.delete("http://localhost:3977/api/delete-departamento/"+departamento,{headers:headers})
      .map(res => res.json());
  }
    updateDeparatmento(direccion){
    let params =JSON.stringify(direccion);
    let headers = new Headers({"Content-Type":"application/json"});
    
    return this._http.post("http://localhost:3977/api/update-direccion/"+direccion._id,params,{headers:headers})
      .map(res => res.json());
  }

}