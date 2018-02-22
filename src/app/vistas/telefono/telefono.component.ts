import { Component, OnInit } from '@angular/core';
import { Telefono } from "../../Modelos/telefono";
import { TelefonoServices } from "../../servicios/telefono";
import { departamentoServices } from "../../servicios/departamento";
@Component({
  selector: 'app-telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.css'],
  providers: [TelefonoServices,
  	departamentoServices
  ]
})
export class TelefonoComponent implements OnInit {
  public nuevo_telefono: Telefono;
  public Array_telefono:Array<Telefono>;
  public select_pc;
  public select_departamento;
  public all_departamento;
  constructor(
  	private _telefonoService : TelefonoServices,
  	private _departamentoService: departamentoServices
  	) { 
  	this.nuevo_telefono = new Telefono("","","","","","","","","","","","");
  }

  ngOnInit() {
  	this._departamentoService.sacarDepartamentos().subscribe(
  			Response =>{
  			this.all_departamento = Response.departamento;
  				console.log(this.all_departamento);
  			},
  			error =>{

  			}
  		)

  }
  register(){
    this.nuevo_telefono.nombre_dep = this.select_departamento;
    this.nuevo_telefono.puerto_pc = this.select_pc;
  	this._telefonoService.registrartelefono(this.nuevo_telefono).subscribe(
        response =>{
              console.log(response);

        },
        error =>{

        }


      )
  }
select_dep(departamento){
        this.select_departamento = departamento._id;
        console.log(this.select_departamento)
}
selected_pc(pc){
        this.select_pc = pc;
        console.log(this.select_pc)
}
Modificar(Telefono){
  console.log(Telefono);
}
CargarTelefonos(){
  this._telefonoService.sacartelefono().subscribe(
      response =>{
          this.Array_telefono  = response.telefono;

      },
      error =>{

      }
    )
}
eliminar(telefono){
  this._telefonoService.eliminartelefono(telefono._id).subscribe(
    response =>{
          console.log(response.telefono);
    },
    error =>{

    }

    )
}    
}
