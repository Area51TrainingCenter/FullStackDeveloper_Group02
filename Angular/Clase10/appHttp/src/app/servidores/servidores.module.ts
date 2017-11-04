import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServidoresRoutingModule } from './servidores-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NuevoComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    CommonModule,
    ServidoresRoutingModule
  ],
  declarations: [ListadoComponent, DetalleComponent, EdicionComponent, NuevoComponent]
})
export class ServidoresModule { }
