import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild("nombre") nombre: ElementRef
  @ViewChild("estado") estado: ElementRef
  @ViewChild("descripcion") descripcion: ElementRef
  @ViewChild("area") area: ElementRef

  nombreServidor: string
  estadoServidor: string
  descripcionServidor: string
  areaServidor: string

  constructor() { }

  /*agregarServidor(nombre: string, estado: string, descripcion: string, area: string) {
    console.log(nombre)
    console.log(estado)
    console.log(descripcion)
    console.log(area)
    console.log("Servidor agregado")
  }*/

  /*agregarServidor(){
    console.log(this.nombre.nativeElement.value)
    console.log(this.estado.nativeElement.value)
    console.log(this.descripcion.nativeElement.value)
    console.log(this.area.nativeElement.value)
    console.log("Servidor agregado")  
  }*/

  agregarServidor(){
    console.log(this.nombreServidor)
    console.log(this.estadoServidor)
    console.log(this.descripcionServidor)
    console.log(this.areaServidor)
    console.log("Servidor agregado")  
  }

  ngOnInit() {
  }

}
