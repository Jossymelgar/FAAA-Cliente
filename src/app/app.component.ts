import { Component, OnInit } from '@angular/core';
import { UserServices } from "./servicios/user";
import { User } from "./Modelos/user";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers:[UserServices]
})
export class AppComponent implements OnInit {
  title = 'Fuerzas Armadas';
  public usuario_logeado;

  public usuario:User;
  constructor(
    private _userServices:UserServices,
    private _user: UserServices
    ){
    this.usuario = new User("","","","")
   }
  iniciar(){
  	
  }
  ngOnInit() {
      this.usuario_logeado = this._userServices.getLogeo();
  }
  login(){
    console.log("entre al login")
       this._user.entrar(this.usuario).subscribe(
        response =>{
            localStorage.setItem("usuario",JSON.stringify(response.user));
            this.usuario_logeado = localStorage.getItem("usuario");
         },
         error =>{
           var errorMessage = <any>error;
           if(errorMessage !=null){
             var body = JSON.parse(error._body)
             
           }
         }

         )
      
}
cerrar(){
  localStorage.clear()
  localStorage.removeItem("usuario")
  this.usuario_logeado = null;
  console.log("entre al cerrer")
}
}
