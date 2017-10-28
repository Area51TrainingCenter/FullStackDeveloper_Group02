import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { NgForm } from '@angular/forms'
import { ServidoresService } from '../servidores.service'
import { Servidor } from '../servidor'

interface canDeactivateComponent {
  canDeactivateComponente: () => boolean
}

@Component({
  selector: 'app-editar-servidor',
  templateUrl: './editar-servidor.component.html',
  styleUrls: ['./editar-servidor.component.css']
})
export class EditarServidorComponent implements OnInit, canDeactivateComponent {
  id: number
  servidor: Servidor
  servidorOriginal: Servidor
  permitir: boolean
  fragmento: string = ""

  constructor(private servidoresService: ServidoresService, private rutaActiva: ActivatedRoute, private ruteador: Router) { }

  verificarIgualdad(original: Servidor, actual: Servidor): boolean {
     for(let propiedad in original) {
       if(original[propiedad] != actual[propiedad]) {
         return true
       }
     }
     return false
  }

  canDeactivateComponente():boolean {
    return this.verificarIgualdad(this.servidorOriginal, this.servidor)
  }

  ngOnInit() {
    // Parámetros en la URL
    this.id = this.rutaActiva.snapshot.params.id

    const servidor: Servidor = this.servidoresService.detalle(this.id)
    this.servidor = servidor
    this.servidorOriginal = Object.assign({}, servidor, {})

    this.rutaActiva.params
      .subscribe(
        (parametros: Params) => {
          this.id = parametros["id"]
          const server: Servidor = this.servidoresService.detalle(this.id)
          this.servidor = server
          this.servidorOriginal = Object.assign({}, server, {})
        }
      )

    // Parámetros de QueryString
    if(this.rutaActiva.snapshot.queryParams.permitir==="true"){
      this.permitir = true
    } else {
      this.permitir = false
    }

    this.rutaActiva.queryParams
      .subscribe(
        (queryParams: Params) =>{
          if(queryParams["permitir"]==="true"){
            this.permitir = true
          } else {
            this.permitir = false
          }
        }
      )

    // Parámetro de fragmento
    this.fragmento = this.rutaActiva.snapshot.fragment
    console.log("Fragmento", this.fragmento)

    this.rutaActiva.fragment
      .subscribe(
        fragmento => {
          this.fragmento = fragmento
          console.log("Fragmento Suscripción", this.fragmento)
        }
      )



  }

  grabar(f: NgForm){
    /*const data = new Servidor(this.id, f.value.nombre, f.value.descripcion, f.value.tipo, f.value.ubicacion)
    this.servidoresService.grabar(data)*/

    this.servidoresService.grabar(this.servidor)
    this.ruteador.navigate(["servidores"])
  }

  editar(id: number) {
    this.ruteador.navigate(["servidores","editar", id], {queryParamsHandling: "preserve"})
  }

}
