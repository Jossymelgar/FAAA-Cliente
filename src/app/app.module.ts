import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Rutas
//import { app_routing } from "./app.rutas";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { SliderComponent } from './vistas/slider/slider.component';
import { DireccionComponent } from './vistas/direccion/direccion.component';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http'

import { routing, appRoutingProviders } from "./app.rutas";
import { DepartamentoComponent } from './vistas/departamento/departamento.component';
import { CargoComponent } from './vistas/cargo/cargo.component';
import { EmpleadoComponent } from './vistas/empleado/empleado.component';
import { TelefonoComponent } from './vistas/telefono/telefono.component';
import { SwichComponent } from './vistas/swich/swich.component';
import { ImpresoraComponent } from './vistas/impresora/impresora.component';
import { PcComponent } from './vistas/pc/pc.component'

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    DireccionComponent,
    DepartamentoComponent,
    CargoComponent,
    EmpleadoComponent,
    TelefonoComponent,
    SwichComponent,
    ImpresoraComponent,
    PcComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    routing,    
    HttpModule,
   
  ],
  providers: [appRoutingProviders
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
