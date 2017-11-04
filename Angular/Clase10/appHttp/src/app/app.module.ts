import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NucleoModule } from './nucleo/nucleo.module';
import { AppRouting } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NucleoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
