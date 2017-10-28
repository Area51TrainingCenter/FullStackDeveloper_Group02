import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SeguridadService } from "app/auth/seguridad.service";

interface IUsuario {
  id:number, nombre:string, username:string, password:string, rol: string
}

@Injectable()
export class AutorizacionGuard implements CanActivate {
  constructor(private seguridadService: SeguridadService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const usuario:IUsuario[] = this.seguridadService.usuarioEncontrado
      if(usuario  && usuario[0].rol === "ADMIN") {
        return true
      }
      return false;
  }
}
