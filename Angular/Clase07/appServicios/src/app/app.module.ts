import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppService } from './app.service';
import { PeliculasService } from './peliculas.service'

import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormularioComponent } from './listado/formulario/formulario.component';
import { PeliculaComponent } from './listado/pelicula/pelicula.component'

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    FormularioComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService, PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
