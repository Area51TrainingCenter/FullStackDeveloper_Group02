import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AutenticacionService } from './autenticacion.service';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AutenticacionGuard } from './autenticacion.guard';
import { AppRouting } from './app-routing.module';
import { AppInterceptor } from './app.interceptor';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AutenticacionComponent,
    UsuariosComponent
  ],
  imports: [
	BrowserModule,
	HttpClientModule,
	AppRouting,
	FormsModule
  ],
  providers: [
	  AutenticacionService, 
	  AutenticacionGuard, 
	  {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
