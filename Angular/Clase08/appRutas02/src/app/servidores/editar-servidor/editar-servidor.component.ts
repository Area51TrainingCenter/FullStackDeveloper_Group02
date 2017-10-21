import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { NgForm } from '@angular/forms'
import { ServidoresService } from '../servidores.service'
import { Servidor } from '../servidor'

@Component({
  selector: 'app-editar-servidor',
  templateUrl: './editar-servidor.component.html',
  styleUrls: ['./editar-servidor.component.css']
})
export class EditarServidorComponent implements OnInit {
  id: number
  servidor: Servidor

  constructor(private servidoresService: ServidoresService, private rutaActiva: ActivatedRoute, private ruteador: Router) { }

  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params.id
    this.servidor = this.servidoresService.detalle(this.id)
  }

  grabar(f: NgForm){
    /*const data = new Servidor(this.id, f.value.nombre, f.value.descripcion, f.value.tipo, f.value.ubicacion)
    this.servidoresService.grabar(data)*/

    this.servidoresService.grabar(this.servidor)
    this.ruteador.navigate(["servidores"])
  }

}
