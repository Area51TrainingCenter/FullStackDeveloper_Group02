import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service'
import { Pelicula } from '../compartido/pelicula'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

   lista: Array<Pelicula>

  constructor(private peliculasService: PeliculasService) {

  }

  ngOnInit() {
    this.lista = this.peliculasService.peliculas
  }

}
