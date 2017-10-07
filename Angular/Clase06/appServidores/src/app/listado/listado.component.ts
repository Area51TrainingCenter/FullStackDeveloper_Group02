import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Servidor } from "../compartido/servidor"

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  // encapsulation: ViewEncapsulation.None  Afecta a todos los componentes
  // encapsulation: ViewEncapsulation.Native Afecta solo al componente. No es afectado por estilos externos
  // encapsulation: ViewEncapsultation.Emulated Afecta solo al componente pero tambien afectan estilos externos
})
export class ListadoComponent implements OnInit {

  @Input() lista: Array<Servidor>

  constructor() {
    
   }

  ngOnInit() {
    console.log(this.lista)
  }

  nuevoServidor(data: Servidor){
    console.log("data recibida" ,data)

    this.lista.push(data)
  }

}
