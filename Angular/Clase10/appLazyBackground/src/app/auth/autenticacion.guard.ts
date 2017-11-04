import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SeguridadService } from "app/auth/seguridad.service";

@Injectable()
export class AutenticacionGuard implements CanActivate, CanActivateChild, CanLoad {
  canLoad(route: Route): boolean {
    return this.seguridadService.estaAutenticado()
  }

  constructor(private seguridadService: SeguridadService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.seguridadService.estaAutenticado();
  }

  canActivateChild():boolean{
    return this.seguridadService.estaAutenticado();
  }
}
