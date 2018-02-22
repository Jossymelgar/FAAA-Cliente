
import { Injectable } from "@angular/core";
import {Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map"
import { Observable } from "rxjs/observable";
@Injectable()
export class cargoServices{
	constructor(
    private _http: Http
    ){
		
	}
 
  registrarCargo(cargo){
    let params =JSON.stringify(cargo);
    let headers = new Headers({"Content-Type":"application/json"});
    return this._http.post("http://localhost:3977/api/save-cargo",params,{headers:headers})
      .map(res => res.json());
  }
  sacarCargo(){
    
    let headers = new Headers({"Content-Type":"application/json"});
    console.log("entre al  servicio de departamento");
    return this._http.post("http://localhost:3977/api/get-cargo",{headers:headers})
      .map(res => res.json());
  }
  eliminarCargo(cargo){
    let params =JSON.stringify(cargo);
    let headers = new Headers({"Content-Type":"application/json"});
    
    return this._http.delete("http://localhost:3977/api/delete-cargo/"+cargo,{headers:headers})
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