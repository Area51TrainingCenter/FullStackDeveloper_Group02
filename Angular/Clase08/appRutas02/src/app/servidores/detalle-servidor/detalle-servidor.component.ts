import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detalle-servidor',
  templateUrl: './detalle-servidor.component.html',
  styleUrls: ['./detalle-servidor.component.css']
})
export class DetalleServidorComponent implements OnInit {
  id: number

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params.id
  }

}
