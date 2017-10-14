import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../compartido/pelicula'
import { PeliculasService } from '../../peliculas.service'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pela: Pelicula

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
  }

}
