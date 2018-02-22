
import { Injectable } from "@angular/core";
import {Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map"
import { Observable } from "rxjs/observable";
@Injectable()
export class pcServices{
	constructor(
    private _http: Http
    ){
		
	}
 
  registrarPc(pc){
    let params =JSON.stringify(pc);
    let headers = new Headers({"Content-Type":"application/json"});
    return this._http.post("http://localhost:3977/api/save-pc",params,{headers:headers})
      .map(res => res.json());
  }
  sacarPc(){
    
    let headers = new Headers({"Content-Type":"application/json"});
    console.log("entre al  servicio de pc");
    return this._http.post("http://localhost:3977/api/get-pc",{headers:headers})
      .map(res => res.json());
  }
  eliminarPc(pc){
    let params =JSON.stringify(pc);
    let headers = new Headers({"Content-Type":"application/json"});
    
    return this._http.delete("http://localhost:3977/api/delete-pc/"+pc,{headers:headers})
      .map(res => res.json());
  }
    updateDeparatmento(direccion){
    let params =JSON.stringify(direccion);
    let headers = new Headers({"Content-Type":"application/json"});
    
    return this._http.post("http://localhost:3977/api/update-direccion/"+direccion._id,params,{headers:headers})
      .map(res => res.json());
  }

}