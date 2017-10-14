import { Injectable } from '@angular/core';
import { Pelicula } from './compartido/pelicula'

@Injectable()
export class PeliculasService {

  private _peliculas: Array<Pelicula> = [
    new Pelicula("El Gladiador","Un general que desafió a un imperio", 2005, "acción",[]),
    new Pelicula("El Perfume","Historia de un asesino obsesionado con obtener la esencia que domine al mundo", 2010, "suspenso", []),
    new Pelicula("El naúfrago", "Basada en una historia real de un accidente aereo", 2003, "drama", [])
  ]

  peliculaSeleccionada: Pelicula

  get peliculas(): Array<Pelicula> {
    return this._peliculas
  }

  agregarPelicula(pelicula: Pelicula) {
    this._peliculas.push(pelicula)
  }

  constructor() { }

}
