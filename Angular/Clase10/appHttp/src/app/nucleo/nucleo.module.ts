import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AppRouting } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRouting
  ],
  declarations: [HomeComponent, CabeceraComponent],
  exports: [
    CabeceraComponent,
    AppRouting
  ]
})
export class NucleoModule { }
