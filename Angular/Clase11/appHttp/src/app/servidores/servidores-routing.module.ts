import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {path: "servidores", children:[
    {path: "", component: ListadoComponent},
    {path: "nuevo", component: NuevoComponent},
    {path: "detalle/:id", component: DetalleComponent},
    {path: "edicion/:id", component: EdicionComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServidoresRoutingModule { }
