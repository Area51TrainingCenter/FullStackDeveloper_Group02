import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./nucleo/home/home.component";
import { NgModule } from "@angular/core";
import { ServidoresModule } from "./servidores/servidores.module";
import { RegistroComponent } from "./nucleo/registro/registro.component";
import { AutenticacionGuard } from "./seguridad/autenticacion.guard";

const rutas: Routes = [
    {path: "", component: HomeComponent, pathMatch: "full"},
    {path: "registro", component: RegistroComponent},
    {path: "servidores", loadChildren: "./servidores/servidores.module#ServidoresModule", canLoad: [AutenticacionGuard]}
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