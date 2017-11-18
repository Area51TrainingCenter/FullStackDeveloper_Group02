import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServidoresRoutingModule } from './servidores-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ServidoresApiService } from './servidores-api.service';
import { ServidoresService } from './servidores.service';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from "../material/material.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	ServidoresRoutingModule,
	MaterialModule
  ],
  declarations: [ListadoComponent, DetalleComponent, EdicionComponent, NuevoComponent],
  providers: [ServidoresService, ServidoresApiService]
})
export class ServidoresModule { }
