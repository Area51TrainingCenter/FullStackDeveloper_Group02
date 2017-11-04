import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'


import { ListadoComponent } from "./servidores/listado/listado.component";
import { AutenticacionGuard } from "./auth/autenticacion.guard";
import { DetalleServidorComponent } from "./servidores/detalle-servidor/detalle-servidor.component";
import { EditarServidorComponent } from "./servidores/editar-servidor/editar-servidor.component";
import { GuardadoGuard } from "./auth/guardado.guard";
import { AutorizacionGuard } from "./auth/autorizacion.guard";
import { HomeComponent } from "app/nucleo/home/home.component";

const rutas: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "servidores", component: ListadoComponent, canActivate: [AutenticacionGuard], canActivateChild:[AutenticacionGuard], children: [
    {path: "detalle/:id", component: DetalleServidorComponent},
    {path: "editar/:id", component: EditarServidorComponent, canActivate:[AutorizacionGuard], canDeactivate: [GuardadoGuard]}
  ]},
  {path: "areas", loadChildren: "./areas/areas.module#AreasModule", canLoad: [AutenticacionGuard]},
  {path: "**", redirectTo: "/"}
]

@NgModule({
  declarations: [
    ListadoComponent,
    DetalleServidorComponent,
    EditarServidorComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules}),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [AutenticacionGuard, AutorizacionGuard, GuardadoGuard]
})
export class AppRoutingModule {}
