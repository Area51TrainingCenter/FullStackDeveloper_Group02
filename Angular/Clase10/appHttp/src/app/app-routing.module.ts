import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./nucleo/home/home.component";
import { NgModule } from "@angular/core";
import { ServidoresModule } from "./servidores/servidores.module";

const rutas: Routes = [
    {path: "", component: HomeComponent, pathMatch: "full"}
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