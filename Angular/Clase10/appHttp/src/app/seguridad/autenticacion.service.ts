import { Injectable } from '@angular/core';
import { IUsuario } from '../nucleo/interfaces';
import { AuthApiService } from './auth-api.service';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class AutenticacionService {
  usuario: IUsuario

  constructor(private authApiService: AuthApiService) { }

  logout(){

  }

  registro(usuario: IUsuario): Observable<IUsuario> {
    return this.authApiService.registro(usuario)
  }

  login(usuario: IUsuario): Observable<IUsuario> {
    return this.authApiService.login(usuario)
  }

  obtenerToken(){

  }

}
