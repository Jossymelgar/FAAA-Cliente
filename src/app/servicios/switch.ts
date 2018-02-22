
import { Injectable } from "@angular/core";
import {Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map"
import { Observable } from "rxjs/observable";
@Injectable()
export class switchServices{
	constructor(
    private _http: Http
    ){
		
	}
 
  registrarSwitch(Switch){
    let params =JSON.stringify(Switch);
    let headers = new Headers({"Content-Type":"application/json"});
    return this._http.post("http://localhost:3977/api/save-switch",params,{headers:headers})
      .map(res => res.json());
  }
  sacarSwitch(){
    
    let headers = new Headers({"Content-Type":"application/json"});
    
    return this._http.post("http://localhost:3977/api/get-switch",{headers:headers})
      .map(res => res.json());
  }
  eliminarSwitch(Switch){
    let params =JSON.stringify(Switch);
    let headers = new Headers({"Content-Type":"application/json"});
    
    return this._http.delete("http://localhost:3977/api/delete-switch/"+Switch,{headers:headers})
      .map(res => res.json());
  }
    updateDirecciones(direccion){
    let params =JSON.stringify(direccion);
    let headers = new Headers({"Content-Type":"application/json"});
    
    return this._http.post("http://localhost:3977/api/update-direccion/"+direccion._id,params,{headers:headers})
      .map(res => res.json());
  }

}