import { Component, OnInit, Input } from '@angular/core';
import { Servidor } from "../../compartido/servidor"

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css']
})
export class ServidorComponent implements OnInit {

  //@Input("item") elemento: {nombre: string, estado: string, descripcion:string, area:string}
  @Input("item") elemento: Servidor
  constructor() { }

  ngOnInit() {
  }

  obtenerColorFondo(){
    return this.elemento.estado.toLowerCase() == 'activo' ? 'green' : 'gray'
  }

}
