import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from "app/home/home.component";
import { ListadoComponent } from "app/servidores/listado/listado.component";
import { AutenticacionGuard } from "app/auth/autenticacion.guard";
import { DetalleServidorComponent } from "app/servidores/detalle-servidor/detalle-servidor.component";
import { EditarServidorComponent } from "app/servidores/editar-servidor/editar-servidor.component";
import { GuardadoGuard } from "app/auth/guardado.guard";
import { AutorizacionGuard } from "app/auth/autorizacion.guard";
import { ListadoAreasComponent } from "app/areas/listado/listado.component";

const rutas: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "servidores", component: ListadoComponent, canActivate: [AutenticacionGuard], canActivateChild:[AutenticacionGuard], children: [
    {path: "detalle/:id", component: DetalleServidorComponent},
    {path: "editar/:id", component: EditarServidorComponent, canActivate:[AutorizacionGuard], canDeactivate: [GuardadoGuard]}
  ]},
  {path: "areas", component: ListadoAreasComponent},
  // {path: "**", component:ListadoComponent}
  {path: "**", redirectTo: "/"}
]

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ],
  providers: [AutenticacionGuard, AutorizacionGuard, GuardadoGuard]
})
export class AppRoutingModule {}
