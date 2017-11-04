import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { ServidoresService } from '../servidores.service'
import { Servidor } from '../servidor'

@Component({
  selector: 'app-detalle-servidor',
  templateUrl: './detalle-servidor.component.html',
  styleUrls: ['./detalle-servidor.component.css']
})
export class DetalleServidorComponent implements OnInit {
  id: number
  servidor: Servidor

  constructor(private rutaActiva: ActivatedRoute, private servidoresService: ServidoresService, private router: Router) { }

  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params.id
    this.servidor = this.servidoresService.detalle(this.id)

    this.rutaActiva.params
      .subscribe(
        (parametros: Params) => {
          this.id = parametros["id"]
          this.servidor = this.servidoresService.detalle(this.id)
        }
      )
  }

  cargar(id: number){
    this.router.navigate(["servidores", "detalle", id])
  }

  editar(){
    this.router.navigate(["servidores", "editar", this.id], {queryParams: {permitir: false, eliminar: false}, fragment: "autenticado" })
  }

}
