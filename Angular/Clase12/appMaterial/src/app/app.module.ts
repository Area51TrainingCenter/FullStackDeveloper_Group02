
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import 'hammerjs';

import { AppComponent } from './app.component';
import { NucleoModule } from './nucleo/nucleo.module';
import { AppRouting } from './app-routing.module';
import { AutenticacionService } from './seguridad/autenticacion.service';
import { AuthApiService } from './seguridad/auth-api.service';
import { AutenticacionGuard } from './seguridad/autenticacion.guard';
import { AppInterceptor } from './app.interceptor';
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
	NucleoModule,
	BrowserAnimationsModule,
	MaterialModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true},
    AutenticacionService,
      AuthApiService,
      AutenticacionGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
