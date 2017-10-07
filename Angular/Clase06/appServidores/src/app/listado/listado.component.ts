import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() lista: Array<{nombre: string, estado: string, descripcion:string, area:string}>

  constructor() {
    
   }

  ngOnInit() {
    console.log(this.lista)
  }

}
