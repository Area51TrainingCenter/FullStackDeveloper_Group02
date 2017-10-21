import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoComponent } from './servidores/listado/listado.component';
import { ListadoAreasComponent } from './areas/listado/listado.component'
import { HomeComponent } from './home/home.component';

import { ServidoresService } from './servidores/servidores.service';
import { DetalleServidorComponent } from './servidores/detalle-servidor/detalle-servidor.component'

const rutas: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "servidores", component: ListadoComponent},
  {path: "servidores/detalle/:id", component: DetalleServidorComponent},
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
    DetalleServidorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [ServidoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
