import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivaBasica } from './app.directive';
import { DirectivaAvanzadaDirective } from './directiva-avanzada.directive';
import { SelectDirective } from './select.directive'

@NgModule({
  declarations: [
    AppComponent,
    DirectivaBasica,
    DirectivaAvanzadaDirective,
    SelectDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
