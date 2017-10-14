import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../compartido/pelicula'
import { ActivatedRoute } from '@angular/router'
import { PeliculasService } from '../peliculas.service'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  pelicula: Pelicula
  constructor(private ruta: ActivatedRoute, private peliculasService: PeliculasService) { }

  ngOnInit() {
    const indice = this.ruta.snapshot.params["id"]
    this.pelicula = this.peliculasService.peliculas[indice]
  }

}
