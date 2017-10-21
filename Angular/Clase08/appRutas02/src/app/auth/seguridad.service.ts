import { Injectable } from '@angular/core';

@Injectable()
export class SeguridadService {
  private autenticado: boolean = false

  constructor() { }

  login() {
    this.autenticado = true
  }

  logout() {
    this.autenticado = false
  }

  estaAutenticado(): boolean {
    return this.autenticado
  }

}
