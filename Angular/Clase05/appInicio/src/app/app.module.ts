import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';

import { Servidor } from "./servidor.component"
import { Botonera } from "./botonera.component";
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormularioComponent } from './listado/formulario/formulario.component'

@NgModule({
  declarations: [
    AppComponent,
    Servidor,
    Botonera,
    ListadoComponent,
    DetalleComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
