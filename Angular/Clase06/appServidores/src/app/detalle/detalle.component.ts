import { Component, OnInit, Input } from '@angular/core';
import { Servidor } from '../compartido/servidor'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() dato: Servidor

  constructor() { }

  ngOnInit() {
  }

}
