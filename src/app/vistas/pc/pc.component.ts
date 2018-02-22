import { Component, OnInit } from '@angular/core';
import { pcServices }  from "../../servicios/pc";
import { departamentoServices } from "../../servicios/departamento";
import { empleadoServices } from "../../servicios/empleado";
import { impresoraServices } from "../../servicios/impresora";
import { Pc } from "../../Modelos/pc";
@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css'],
  providers: [
  	pcServices,
  	departamentoServices,
  	empleadoServices,
  	impresoraServices
  	]
})
export class PcComponent implements OnInit {
   public nuevo_pc :Pc;
   public Array_pc;
   public all_departamento;
   public all_empleado;
   public all_impresora;

  constructor(
  	private _pcService: pcServices,
  	private _departamentoService: departamentoServices,
  	private _empleadoService: empleadoServices,
  	private _impresoraService: impresoraServices 
  	) { 
  	this.nuevo_pc = new Pc("","","","","","","","","","","","","","","","","","","","","")

  }

  ngOnInit() {
  	 
  	 this._departamentoService.sacarDepartamentos().subscribe(
  	 	response =>{
  	 			this.all_departamento = response.departamento;
  	 		
  	 	},
  	 	error =>{

  	 	}
  	 	)
  	  this._empleadoService.sacarEmpleado().subscribe(
  	 	response =>{
  	 			this.all_empleado = response.empleado;
  	 			
  	 	},
  	 	error =>{

  	 	}
  	 	)
  	   this._impresoraService.sacarImpresora().subscribe(
  	 	response =>{
  	 			this.all_impresora = response.impresora;

  	 	},
  	 	error =>{

  	 	}
  	 	)
  }
 register(){
  	this._pcService.registrarPc(this.nuevo_pc).subscribe(
  		response =>{
  			console.log(response.pc);
  		},
  		error=>{

  		}
  		)
  }
select_impresora(impre){
	this.nuevo_pc.impresora = impre._id;
}
select_departamento(depto){
	this.nuevo_pc.nombre_dep = depto._id;
}
eliminar(pc){
	this._pcService.eliminarPc(pc._id).subscribe(
			Response =>{
				console.log(Response.pc);
			},Error=>{

			}

		)

}
getPcs(){
	this._pcService.sacarPc().subscribe(
  	 		response =>{
  	 			this.Array_pc =response.pc;

  	 		},
  	 		error=>{

  	 		}

  	 	)
}
}
