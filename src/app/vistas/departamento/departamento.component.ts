import { Component, OnInit } from '@angular/core';
import { Departamento } from "../../Modelos/departamento";
import { departamentoServices } from "../../servicios/departamento";
import { Direccion } from "../../Modelos/direccion";
import { direccionServices }  from "../../servicios/direccion";
@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css'],
  providers:[departamentoServices,
  direccionServices]
})
export class DepartamentoComponent implements OnInit {
public save_departamento:Departamento;
public Toda_direcciones:Array<Direccion>;
public array_departamento:Array<Departamento>
public direccion_selec;
  constructor(
  		private _depSevice: departamentoServices,
  		private _dorecRegister: direccionServices
  	) { 
      this.save_departamento = new Departamento("","");
  }

  ngOnInit() {
  	   this._dorecRegister.sacarDirecciones().subscribe(
		response =>{
			this.Toda_direcciones = response.direccion;
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
  registrar(){
  	if (this.direccion_selec !=undefined && this.save_departamento.nombre_dep !="") {
  		// code...
  		this.save_departamento.nombre_direc = this.direccion_selec; 
  		
		this._depSevice.registrarDepartamento(this.save_departamento).subscribe(
			response =>{
				let dire = response.departamento;
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
  	
  }
  slect_direc(direc){
  	this.direccion_selec = direc._id;

  }
  sacarDep(){
  	this._depSevice.sacarDepartamentos().subscribe(
		response =>{
			this.array_departamento = response.departamento;
			console.log(response)
			
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
  deleteDep(algo){
  	this._depSevice.eliminarDepartamento(algo._id).subscribe(
		response =>{
			console.log(response.departamento);
			
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

}
