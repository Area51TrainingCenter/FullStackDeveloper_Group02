import { NgModule } from "@angular/core";
import { CabeceraComponent } from "app/nucleo/cabecera/cabecera.component";
import { HomeComponent } from "app/nucleo/home/home.component";
import { AppRoutingModule } from "app/app.routing.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        HomeComponent,
        CabeceraComponent
    ],
    imports: [
        AppRoutingModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        CabeceraComponent,
        AppRoutingModule
    ]
})
export class NucleoModule {}