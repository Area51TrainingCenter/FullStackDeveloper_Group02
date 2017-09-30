import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  habilitado:boolean = false
  habilitadoLogin:boolean = false
  titulo:string = ""

  constructor() { 
    setTimeout(()=>{
      this.habilitado = true
    }, 3000)

  }

  ngOnInit() {
  }

}
