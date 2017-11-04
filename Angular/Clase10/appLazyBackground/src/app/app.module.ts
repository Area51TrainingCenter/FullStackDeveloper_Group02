import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServidoresService } from './servidores/servidores.service';
import { SeguridadService } from './auth/seguridad.service'
import { AreasModule } from 'app/areas/areas.module';
import { NucleoModule } from 'app/nucleo/nucleo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NucleoModule
  ],
  providers: [ServidoresService, SeguridadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
