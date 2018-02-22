import {Routes, RouterModule, RouterLink} from "@angular/router";

import { ModuleWithProviders } from "@angular/core";
import { DireccionComponent } from "./vistas/direccion/direccion.component";
import { DepartamentoComponent } from "./vistas/departamento/departamento.component";
import { CargoComponent } from "./vistas/cargo/cargo.component";
import { EmpleadoComponent } from "./vistas/empleado/empleado.component";
import { ImpresoraComponent } from "./vistas/impresora/impresora.component";
import { PcComponent } from "./vistas/pc/pc.component";
import { SwichComponent } from "./vistas/swich/swich.component";
import { TelefonoComponent } from "./vistas/telefono/telefono.component";

const appRoutes:  Routes = [
{path:"direccion",component: DireccionComponent},
{path:"departamento",component: DepartamentoComponent},
{path:"cargo",component: CargoComponent},
{path:"empleado",component: EmpleadoComponent},
{path:"impresora",component: ImpresoraComponent},
{path:"pc",component: PcComponent},
{path:"switch",component: SwichComponent},
{path:"telefono",component: TelefonoComponent},
{path:"**",pathMatch:"full",redirectTo:"direccion"}

];
//export const app_routing = RouterModule.forRoot(app_routes);
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);