import { Component, OnInit } from '@angular/core';
import { ServidoresService } from '../servidores.service';
import { IServidor } from '../iservidor.interface';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  nombre: string
  descripcion: string 

  constructor(private servidoresService: ServidoresService, private router: Router) { }

  ngOnInit() {
  }

  insertar() {
    const servidor: IServidor = {nombre: this.nombre, descripcion: this.descripcion}
    this.servidoresService.insertar(servidor)
      .subscribe(
        (registro: IServidor) => {
          this.router.navigate(["servidores"])
        },
        (error: Error) => console.log(error.message)
      )
  }



}
