import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IServidor } from './iservidor.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServidoresApiService {

  constructor(private http: HttpClient) { }

  listado(): Observable<IServidor[]> {
    // const token: string = this.autenticacion.obtenerToken()

    /* 
      httpModule ---> Headers
      httpClientModule ----> HttpHeaders
    */

/*     const headers: HttpHeaders = new HttpHeaders({ "Authorization": `Bearer ${token}` }) */

/* return this.http.get<IServidor[]>("http://localhost:1337/servidores", {
  observe: "body", responseType: "json"
}) */

    return this.http.get<IServidor[]>("http://localhost:1337/servidores", {
      observe: "body", responseType: "json"
    })
  }

  insertar(servidor: IServidor): Observable<IServidor> {
    /* const token: string = this.autenticacion.obtenerToken()
    const headers: HttpHeaders = new HttpHeaders({ "Authorization": `Bearer ${token}` }) */

    return this.http.post<IServidor>("http://localhost:1337/servidores", servidor, {
      observe: "body", responseType: "json"
    })
  }

  eliminar(idServidor: number): Observable<IServidor> {
    return this.http.delete<IServidor>(`http://localhost:1337/servidores/${idServidor}`)
  }

  actualizar(servidor: IServidor): Observable<IServidor> {
    return this.http.put<IServidor>(`http://localhost:1337/servidores/${servidor.idServidor}`,servidor)
  }

  detalle(idServidor: number): Observable<IServidor[]> {
    return this.http.get<IServidor[]>(`http://localhost:1337/servidores/${idServidor}`, {
      observe: "body", responseType: "json"
    })
  }

}
