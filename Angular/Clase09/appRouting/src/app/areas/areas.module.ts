import { NgModule } from "@angular/core";
import { ListadoAreasComponent } from "app/areas/listado/listado.component";
import { EditarAreaComponent } from './editar-area/editar-area.component';
import { DetalleAreaComponent } from './detalle-area/detalle-area.component';
import { Routes, RouterModule } from "@angular/router";

const rutas: Routes = [
  {path: "", component: ListadoAreasComponent, children:[
    {path: "detalle", component: DetalleAreaComponent},
    {path: "editar", component: EditarAreaComponent}
  ]}
]

@NgModule({
  declarations: [
    ListadoAreasComponent,
    EditarAreaComponent,
    DetalleAreaComponent
  ],
  imports: [
    RouterModule.forChild(rutas)
  ]
})
export class AreasModule {}
