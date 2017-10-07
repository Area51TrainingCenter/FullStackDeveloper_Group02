import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './listado/formulario/formulario.component';
import { ServidorComponent } from './listado/servidor/servidor.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    FormularioComponent,
    ServidorComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
