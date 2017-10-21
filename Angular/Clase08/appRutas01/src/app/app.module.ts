import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

const rutas: Routes = [
  {path: "", component: ListadoComponent},
  {path: "nuevo", component: NuevoComponent},
  {path: "detalle", component: DetalleComponent},
  // {path: "**", component:ListadoComponent}
  {path: "**", redirectTo: "/"}
]


@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    NuevoComponent,
    DetalleComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
