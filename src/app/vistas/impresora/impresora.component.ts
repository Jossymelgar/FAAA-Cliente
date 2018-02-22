import { Component, OnInit } from '@angular/core';
import { Impresora } from "../../Modelos/impresora";
import { impresoraServices } from "../../servicios/impresora";
import { departamentoServices } from "../../servicios/departamento";
@Component({
  selector: 'app-impresora',
  templateUrl: './impresora.component.html',
  styleUrls: ['./impresora.component.css'],
  providers: [impresoraServices,departamentoServices]
})
export class ImpresoraComponent implements OnInit {
public nuevo_impresora: Impresora;
public Array_impresora;
public all_departamento
public selected_departamento;
  constructor(
  	private _impresoraServices:impresoraServices,
  	private _departametoServices:departamentoServices
  	) { 
  	this.nuevo_impresora = new Impresora("","","","","","","","","");
  }

  ngOnInit() {
  		this._departametoServices.sacarDepartamentos().subscribe(
  				response =>{
  					this.all_departamento = response.departamento;
  					console.log(this.all_departamento)
  				},
  				error =>{

  				}

  			)
  }
  select_dep(departamento){
  			this.nuevo_impresora.nombre_dep = departamento._id;
  }
 registrar(){
 this._impresoraServices.registrarImpresora(this.nuevo_impresora).subscribe(
 		response =>{
 			console.log(response.impresora)
 		},
 		error =>{

 		}


 	)
 }
 getImpresoras(){
 	this._impresoraServices.sacarImpresora().subscribe(
 		response =>{
 			this.Array_impresora = response.impresora;
 		},
 		error=>{

 		}
 		)
 }
 Modificar(impresora){
 	console.log(impresora)
 }
 eliminar(impresora){
 	this._impresoraServices.eliminarImpresora(impresora._id).subscribe(
 		response =>{
 				console.log(response.impresora)
 		},
 		error=>{

 		}

 		)
 }
}
