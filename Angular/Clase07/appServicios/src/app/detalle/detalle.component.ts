import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../compartido/pelicula'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() pela: Pelicula

  constructor() { }

  ngOnInit() {
  }

}
