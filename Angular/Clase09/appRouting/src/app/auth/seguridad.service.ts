import { Injectable, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";


interface IUsuario {
  id:number, nombre:string, username:string, password:string, rol: string
}

@Injectable()
export class SeguridadService {

  private usuarios:Array<IUsuario> = [
    {id:1, nombre: "Sergio", username: "shidalgo", password: "123", rol: "ADMIN"},
    {id:2, nombre: "Anónimo", username: "anonimo", password: "456", rol: "OPERADOR"}
  ]

  cambioEstado = new EventEmitter<boolean>()

  private autenticado: boolean = false

  usuarioEncontrado:Array<IUsuario>

  constructor(private router: Router) { }

  login(username: string, password: string) {
    this.usuarioEncontrado = this.usuarios.filter(item => {
      return item.username.toLowerCase() === username.toLowerCase() && item.password === password
    })

    if(this.usuarioEncontrado && this.usuarioEncontrado.length>0){
      this.autenticado = true
      this.cambioEstado.emit(true)
      this.router.navigate(["servidores"])
    } else {
      this.autenticado = false
    }
  }

  logout() {
    this.autenticado = false
    this.cambioEstado.emit(false)
  }

  estaAutenticado(): boolean {
    return this.autenticado
  }

}
