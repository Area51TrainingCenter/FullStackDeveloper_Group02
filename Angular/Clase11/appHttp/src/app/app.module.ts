import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NucleoModule } from './nucleo/nucleo.module';
import { AppRouting } from './app-routing.module';
import { AutenticacionService } from './seguridad/autenticacion.service';
import { AuthApiService } from './seguridad/auth-api.service';
import { AutenticacionGuard } from './seguridad/autenticacion.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NucleoModule
  ],
  providers: [AutenticacionService, AuthApiService, AutenticacionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
