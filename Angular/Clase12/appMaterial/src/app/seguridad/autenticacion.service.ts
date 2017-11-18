import { Injectable } from '@angular/core';
import { IUsuario } from '../nucleo/interfaces';
import { AuthApiService } from './auth-api.service';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AutenticacionService {
  private usuario: IUsuario
  private autenticado: boolean = false

  cambioEstado = new Subject()

  constructor(private authApiService: AuthApiService) { }

  logout(){
    this.autenticado = false
    localStorage.removeItem("token")
    this.usuario = undefined

    this.cambioEstado.next(false)
  }

  registro(usuario: IUsuario): Observable<IUsuario> {
    return this.authApiService.registro(usuario)
  }

  login(usuario: IUsuario){
    return this.authApiService.login(usuario)
      .subscribe(
        (usuario: IUsuario) => {
          this.autenticado = true
          this.usuario = usuario
          localStorage.setItem("token", usuario.token)
          this.cambioEstado.next(true)
        },
        (error: Error) => console.log(error.message)
      )
  }

  obtenerToken(){
    // return this.usuario.token
    return localStorage.getItem("token")
  }

  estaAutenticado():boolean {
    return this.autenticado
  }

}
