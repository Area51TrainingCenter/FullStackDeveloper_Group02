import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoComponent } from './servidores/listado/listado.component';
import { ListadoAreasComponent } from './areas/listado/listado.component'
import { HomeComponent } from './home/home.component';

import { ServidoresService } from './servidores/servidores.service';
import { SeguridadService } from './auth/seguridad.service'

import { DetalleServidorComponent } from './servidores/detalle-servidor/detalle-servidor.component';
import { EditarServidorComponent } from './servidores/editar-servidor/editar-servidor.component'
import { AutenticacionGuard } from "app/auth/autenticacion.guard";
import { AutorizacionGuard } from "app/auth/autorizacion.guard";
import { GuardadoGuard } from "app/auth/guardado.guard";

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
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListadoComponent,
    HomeComponent,
    ListadoAreasComponent,
    DetalleServidorComponent,
    EditarServidorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule
  ],
  providers: [ServidoresService, SeguridadService, AutenticacionGuard, AutorizacionGuard, GuardadoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
