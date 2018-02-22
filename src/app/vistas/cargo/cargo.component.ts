import { Component, OnInit } from '@angular/core';
import { Cargo } from "../../Modelos/cargo";
import { cargoServices } from "../../servicios/cargo";
import { departamentoServices } from "../../servicios/departamento";

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css'],
  providers: [cargoServices,
  departamentoServices
  ]
})
export class CargoComponent implements OnInit {
  public save_cargo : Cargo;
  public array_cargo:Array<Cargo>;
  public all_departamento;
  public select_departament;
  constructor(
  	private _cargoServices: cargoServices,
  	 private _departamentoServices:departamentoServices,
  	 
  	) {
    this.save_cargo = new Cargo("","");
   }

  ngOnInit() {

  	  this._departamentoServices.sacarDepartamentos().subscribe(
		response =>{
			this.all_departamento = response.departamento;
			console.log(this.all_departamento);
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
  select_dep(dep){
  this.select_departament =dep._id;
  console.log(this.select_departament)
  }
  registra(){
  	this.save_cargo.nombre_dep = this.select_departament;
		this._cargoServices.registrarCargo(this.save_cargo).subscribe(
			response =>{
				let dire = response.cargo;
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
   sacarDep(){
  	this._cargoServices.sacarCargo().subscribe(
		response =>{
			this.array_cargo = response.cargo;
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

    deleteCargo(algo){
   
  	this._cargoServices.eliminarCargo(algo._id).subscribe(
		response =>{
			 
			console.log(response.cargo);
			
		},
		error =>{
			var errorMessage = <any>error;
	 		if(errorMessage !=null){
	 			var body = JSON.parse(error._body)
	 			console.log(body)
	 		//	this.errorMessage = body.message
	 		}
		}

		)
  }
}
