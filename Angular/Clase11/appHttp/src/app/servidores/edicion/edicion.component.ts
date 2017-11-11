import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ServidoresService } from '../servidores.service';
import { IServidor } from '../iservidor.interface';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
  nombre: string
  descripcion: string 
  idServidor: number

  constructor(private rutaActual: ActivatedRoute, private servidoresService: ServidoresService, private router: Router) { }

  ngOnInit() {
    this.idServidor = this.rutaActual.snapshot.params["id"]

    this.servidoresService.detalle(this.idServidor)
      .subscribe(
        (registro: IServidor[]) => {
          this.nombre = registro[0].nombre
          this.descripcion = registro[0].descripcion
        },
        (error: Error) => console.log(error.message)
      )
  }

  actualizar() {
    const datos: IServidor = {idServidor: this.idServidor, nombre: this.nombre, descripcion: this.descripcion}

    this.servidoresService.actualizar(datos)
      .subscribe(
        (registro: IServidor) => {
          this.router.navigate(["servidores"])
        },
        (error: Error) => console.log(error.message)
      )
  }

}
