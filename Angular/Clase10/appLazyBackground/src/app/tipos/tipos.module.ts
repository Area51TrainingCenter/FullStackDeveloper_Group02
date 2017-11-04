import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposRoutingModule } from './tipos-routing.module';
import { ListadoTiposComponent } from './listado-tipos/listado-tipos.component';
import { DetalleTiposComponent } from './detalle-tipos/detalle-tipos.component';
import { EditarTiposComponent } from './editar-tipos/editar-tipos.component';

@NgModule({
  imports: [
    CommonModule,
    TiposRoutingModule
  ],
  declarations: [ListadoTiposComponent, DetalleTiposComponent, EditarTiposComponent]
})
export class TiposModule { }
