import { Component, OnInit } from '@angular/core';
import { direccionServices }  from "../../servicios/direccion";
import { Direccion } from "../../Modelos/direccion";

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css'],
  providers:[direccionServices
  ]
})
export class DireccionComponent implements OnInit {
  public save_direccion:Direccion;
  public direcciones:Array<Direccion>;

  public  Direc_seleccionado:Direccion;
  constructor(
  	private _direcRegister :direccionServices
  	) { 
  	this.save_direccion = new Direccion("");
    this.Direc_seleccionado = new Direccion("");
 	
  }

  ngOnInit() {
  	
  }
  ver(){
  	  console.log("probar sweetAlert");
  	  }
 
  regitrar(){
  	console.log(this.save_direccion)
	this._direcRegister.registrarDireccion(this.save_direccion).subscribe(
		response =>{
			let dire = response.direccion;
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
  sacar_Todo_direc(){
  	   this._direcRegister.sacarDirecciones().subscribe(
		response =>{
			this.direcciones = response.direccion;
			
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
 eliminar_Direc(algo){
  	 this._direcRegister.eliminarDirecciones(algo).subscribe(
		response =>{
			console.log( response.direccion);
			
		},
		error =>{
			var errorMessage = <any>error;
	 		if(errorMessage !=null){
	 			var body = JSON.parse(error._body)
	 			alert(body.message)
	 		//	this.errorMessage = body.message
	 		}
		}

		)
  }
 select(direc){
 	this.Direc_seleccionado= direc;

 }
update(){
		this._direcRegister.updateDirecciones(this.Direc_seleccionado).subscribe(
		response =>{
			console.log(response.direccion);
			
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
