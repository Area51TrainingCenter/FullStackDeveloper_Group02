import { Injectable } from '@angular/core';
import { ServidoresApiService } from './servidores-api.service';
import { IServidor } from './iservidor.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServidoresService {

  constructor(private servidoresApi: ServidoresApiService) { }

  listado(): Observable<IServidor[]> {
    return this.servidoresApi.listado()
  }

  insertar(servidor: IServidor): Observable<IServidor> {
    return this.servidoresApi.insertar(servidor)
  }

  eliminar(idServidor: number): Observable<IServidor> {
    return this.servidoresApi.eliminar(idServidor)
  }

  actualizar(servidor: IServidor): Observable<IServidor> {
    return this.servidoresApi.actualizar(servidor)
  }

  detalle(idServidor: number): Observable<IServidor[]> {
    return this.servidoresApi.detalle(idServidor)
  }

}
