import { Component, OnInit } from '@angular/core';
import { Empleado } from "../../Modelos/empleado";
import { empleadoServices } from "../../servicios/empleado";
import { cargoServices } from "../../servicios/cargo";
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  providers:[empleadoServices,cargoServices] 

})
export class EmpleadoComponent implements OnInit {
 public empleado: Empleado;
 public Array_empleado:Array<Empleado>;
 public select_cargo;
 public all_cargo;

  constructor(
	private _empleadoServices: empleadoServices,
	private _cargoServices: cargoServices
  	) { 
  	this.empleado = new Empleado("","","");
  }

  ngOnInit() {

  	this._cargoServices.sacarCargo().subscribe(
  		response =>{
  			this.all_cargo = response.cargo;
  			console.log(this.all_cargo)
  		},
  		error =>{
  			var errorMessage = <any>error;
	 		if(errorMessage !=null){
	 			var body = JSON.parse(error._body)
	 		//	this.errorMessage = body.message
	 		}
  		}


  		)
  }
  saveEmpleado(){
  	this.empleado.nombre_cargo = this.select_cargo._id;
  	this._empleadoServices.registrarEmpleado(this.empleado).subscribe(
  		response =>{
  			console.log(response.cago)

  		},
  		err =>{

  		}

  		)
  }
 cargo_selected(cargo){
 	this.select_cargo = cargo;
 	console.log(this.select_cargo)
 }
 sacarEmpleado(){
 	this._empleadoServices.sacarEmpleado().subscribe(
 			response =>{
 					this.Array_empleado =response.empleado;
 			},

 			error =>{

 			}
 		)
 }
 eliminarEmpleado(algo){
 	this._empleadoServices.eliminarEmpleado(algo._id).subscribe(
 		response =>{
 			console.log(response.empleado)
 		},
 		error =>{
 			var errorMessage = <any>error;
	 		if(errorMessage !=null){
	 			var body = JSON.parse(error._body)
	 		 console.log(body)
	 		}
 		}
 		)
 }
}
