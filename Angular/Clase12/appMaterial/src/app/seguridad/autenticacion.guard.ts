import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AutenticacionService } from './autenticacion.service';

@Injectable()
export class AutenticacionGuard implements CanLoad {

  constructor(private autenticacion: AutenticacionService){}

  canLoad(): boolean {
    return this.autenticacion.estaAutenticado()
  }


}
