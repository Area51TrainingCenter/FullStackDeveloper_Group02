import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servidores: Array<{nombre: string, estado: string, descripcion:string, area:string}> = [
    {nombre: "Firewall", estado: "activo", descripcion: "Uso exclusivo del area de seguridad", area: "Seguridad"},
    {nombre: "Web Piloto", estado: "activo", descripcion: "Usado por el proyecto Piloto20", area: "Desarrollo"}
  ]
}
