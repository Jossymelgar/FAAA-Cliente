import { Component, OnInit } from '@angular/core';
import {Switch } from "../../Modelos/switch";
import { pcServices } from "../../servicios/pc";
import { switchServices } from "../../servicios/switch"
@Component({
  selector: 'app-swich',
  templateUrl: './swich.component.html',
  styleUrls: ['./swich.component.css'],
  providers: [pcServices,switchServices]
})
export class SwichComponent implements OnInit {
 public nuevo_switch:Switch;
 public Array_switch;
 public all_pc;
 public Cant_puertos;
 public puertos = [];
 public select_puerto;
 public select_pc;
  constructor(
  	private _pcServices: pcServices,
  	private _switchServices: switchServices
  	) { 
  		this.nuevo_switch =  new Switch("",0,"","","","","","","",[],"")


  }
  
  ngOnInit() {
  	this._pcServices.sacarPc().subscribe(
  		Response =>{
  			this.all_pc = Response.pc;
  			console.log(this.all_pc);
  		},
  		Error =>{

  		}
  		)
  }
	registrar(){
   
	}

  generarPuertos(){
     this.puertos = [];
    for (var i = 0; i < this.Cant_puertos; i++) {
       var port = {
           puerto :  (i+1),
            pc     :"" 
       }
      this.puertos.push(port);
      console.log("dnwfpwegwpe")

    }

  }

  puerto_select(puerto){
    this.select_puerto = puerto
    

  }
 pc_select(pc){
      this.select_pc = pc
     
  }
  AsignarPC_Puerto(){
   this.select_puerto.pc =   this.select_pc._id;
    this.nuevo_switch.puertos.push(this.select_puerto);
    console.log(this.nuevo_switch);

  }
}
