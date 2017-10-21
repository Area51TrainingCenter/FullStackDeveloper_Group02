import { Injectable } from '@angular/core'
import { CanActivate, CanActivateChild } from '@angular/router'
import { SeguridadService } from './seguridad.service'

@Injectable()
export class SeguridadGuard implements CanActivate, CanActivateChild {
  constructor(private seguridadService: SeguridadService){}

  canActivate(): boolean {
    return this.seguridadService.estaAutenticado()
  }

  canActivateChild(): boolean {
    return this.canActivate()
  }
}
