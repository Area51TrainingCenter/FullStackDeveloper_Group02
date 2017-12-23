import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { AutenticacionComponent } from "./autenticacion/autenticacion.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { AutenticacionGuard } from "./autenticacion.guard";


const rutas: Routes = [
	{path: "", component: AutenticacionComponent},
	{path: "usuarios", component: UsuariosComponent, canActivate: [AutenticacionGuard]}
]

@NgModule({
	imports: [
		RouterModule.forRoot(rutas)
	],
	exports: [
		RouterModule
	]
})
export class AppRouting {}