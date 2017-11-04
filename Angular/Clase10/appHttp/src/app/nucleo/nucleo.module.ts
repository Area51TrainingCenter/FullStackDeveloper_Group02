import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AppRouting } from '../app-routing.module';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRouting
  ],
  declarations: [HomeComponent, CabeceraComponent, RegistroComponent],
  exports: [
    CabeceraComponent,
    AppRouting
  ]
})
export class NucleoModule { }
