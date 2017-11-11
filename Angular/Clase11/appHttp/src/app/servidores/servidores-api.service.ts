import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IServidor } from './iservidor.interface'
import { AutenticacionService } from '../seguridad/autenticacion.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServidoresApiService {

  constructor(private autenticacion: AutenticacionService, private http: HttpClient) { }

  listado(): Observable<IServidor[]> {
    const token: string = this.autenticacion.obtenerToken()

    /* 
      httpModule ---> Headers
      httpClientModule ----> HttpHeaders
    */

    const headers: HttpHeaders = new HttpHeaders({ "Authorization": `Bearer ${token}` })

    return this.http.get<IServidor[]>("http://localhost:1337/servidores", {
      observe: "body", responseType: "json", headers: headers
    })

  }

  insertar(servidor: IServidor): Observable<IServidor> {
    return this.http.post<IServidor>("http://localhost:1337/servidores", servidor, {
      observe: "body", responseType: "json"
    })
  }

}
