import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service'
import { Pelicula } from '../compartido/pelicula'
import { Router } from '@angular/router'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

   lista: Array<Pelicula>

  constructor(private peliculasService: PeliculasService, private router: Router) {

  }

  seleccionar(indice: number){
    this.router.navigate(["detalle", indice ])
  }

  ngOnInit() {
    this.lista = this.peliculasService.peliculas
  }

}
