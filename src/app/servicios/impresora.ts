
import { Injectable } from "@angular/core";
import {Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map"
import { Observable } from "rxjs/observable";
@Injectable()
export class  impresoraServices{
	constructor(
    private _http: Http
    ){
		
	}
 
  registrarImpresora(impresora){
    let params =JSON.stringify(impresora);
    let headers = new Headers({"Content-Type":"application/json"});
    return this._http.post("http://localhost:3977/api/save-impresora",params,{headers:headers})
      .map(res => res.json());
  }
  sacarImpresora(){
    
    let headers = new Headers({"Content-Type":"application/json"});
    console.log("entre al  servicio de departamento");
    return this._http.post("http://localhost:3977/api/get-impresora",{headers:headers})
      .map(res => res.json());
  }
  eliminarImpresora(impresora){
    let params =JSON.stringify(impresora);
    let headers = new Headers({"Content-Type":"application/json"});
    
    return this._http.delete("http://localhost:3977/api/delete-impresora/"+impresora,{headers:headers})
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