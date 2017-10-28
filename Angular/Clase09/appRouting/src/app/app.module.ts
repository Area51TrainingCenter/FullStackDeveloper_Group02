import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServidoresService } from './servidores/servidores.service';
import { SeguridadService } from './auth/seguridad.service'
import { AppRoutingModule } from "app/app.routing.module";
import { CabeceraComponent } from "app/cabecera/cabecera.component";


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServidoresService, SeguridadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
