import { NgModule } from "@angular/core";
import { AreasRouting } from "app/areas/areas.routing.module";
import { ListadoAreasComponent } from "app/areas/listado/listado.component";
import { DetalleAreaComponent } from "app/areas/detalle-area/detalle-area.component";
import { EditarAreaComponent } from "app/areas/editar-area/editar-area.component";



@NgModule({
  declarations: [
    ListadoAreasComponent,
    DetalleAreaComponent,
    EditarAreaComponent
  ],
  imports: [
    AreasRouting
  ]
})
export class AreasModule {}
