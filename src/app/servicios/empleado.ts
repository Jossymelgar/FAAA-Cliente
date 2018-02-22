
import { Injectable } from "@angular/core";
import {Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map"
import { Observable } from "rxjs/observable";
@Injectable()
export class empleadoServices{
	constructor(
    private _http: Http
    ){
		
	}
 
  registrarEmpleado(empleado){
    let params =JSON.stringify(empleado);
    let headers = new Headers({"Content-Type":"application/json"});
    return this._http.post("http://localhost:3977/api/save-empleado",params,{headers:headers})
      .map(res => res.json());
  }
  sacarEmpleado(){
    
    let headers = new Headers({"Content-Type":"application/json"});
    console.log("entre al  servicio de departamento");
    return this._http.post("http://localhost:3977/api/get-empleado",{headers:headers})
      .map(res => res.json());
  }
  eliminarEmpleado(empleado){
    let params =JSON.stringify(empleado);
    let headers = new Headers({"Content-Type":"application/json"});
    
    return this._http.delete("http://localhost:3977/api/delete-empleado/"+empleado,{headers:headers})
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