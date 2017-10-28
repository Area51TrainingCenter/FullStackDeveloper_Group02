import { NgModule } from "@angular/core";
import { ListadoAreasComponent } from "app/areas/listado/listado.component";
import { EditarAreaComponent } from './editar-area/editar-area.component';
import { DetalleAreaComponent } from './detalle-area/detalle-area.component';
import { Routes, RouterModule } from "@angular/router";
import { AutenticacionGuard } from "app/auth/autenticacion.guard";

const rutas: Routes = [
  {path: "", children:[
    {path: "", component: ListadoAreasComponent},
    {path: "detalle", component: DetalleAreaComponent, canActivate:[AutenticacionGuard]},
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
  ],
  exports: [
    RouterModule
  ],
  providers: [AutenticacionGuard]
})
export class AreasRouting {}
