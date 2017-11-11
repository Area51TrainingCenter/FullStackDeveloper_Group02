import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./nucleo/home/home.component";
import { NgModule } from "@angular/core";
import { ServidoresModule } from "./servidores/servidores.module";
import { RegistroComponent } from "./nucleo/registro/registro.component";

const rutas: Routes = [
    {path: "", component: HomeComponent, pathMatch: "full"},
    {path: "registro", component: RegistroComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(rutas),
        ServidoresModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting {}