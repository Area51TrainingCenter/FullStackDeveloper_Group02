import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IUsuario } from '../nucleo/interfaces';
import { Observer } from 'rxjs/Observer';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { rutaApi } from '../nucleo/constantes';

@Injectable()
export class AuthApiService {

  /*usuarios: IUsuario[] = [
    { id: 1, email: 'sergio@correo.com', password: '123456', createdAt: "2017-11-04", updatedAt: "2017-11-04" },
    { id: 2, email: 'andrea@correo.com', password: '123456', createdAt: "2017-11-04", updatedAt: "2017-11-04" },
    { id: 3, email: 'monica@correo.com', password: '123456', createdAt: "2017-11-04", updatedAt: "2017-11-04" }
  ]*/

  constructor(private http: HttpClient) { }

  registro(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(`${rutaApi}/usuario`, usuario, {
      observe: "body", responseType: "json"
    })

    /*const observador: Observable<IUsuario> = Observable.create(
      (observer: Observer<IUsuario>) => {
        setTimeout(() => {
          const registro: IUsuario = this.usuarios.find(usuario => usuario.email.toUpperCase() === usuario.email.toUpperCase() && usuario.password === usuario.password)

          observer.next(registro)
        }, 1500)
      }
    )

    return observador*/
  }

  login(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(`${rutaApi}/login`, usuario, {
      observe: "body", responseType: "json"
    })
  }

}
