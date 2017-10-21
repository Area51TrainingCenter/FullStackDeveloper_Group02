import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { SeguridadService } from './seguridad.service'

@Injectable()
export class SeguridadGuard implements CanActivate {
  constructor(private seguridadService: SeguridadService){}

  canActivate(): boolean {
    return this.seguridadService.estaAutenticado()
  }
}
