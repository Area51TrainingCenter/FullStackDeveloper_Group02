import { Component, OnInit, OnDestroy } from '@angular/core';
import { AutenticacionService } from '../../seguridad/autenticacion.service';
import { IUsuario } from '../interfaces';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  email: string
  password: string
  usuarioLogueado: boolean = false
  suscripcion: Subscription

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
    this.usuarioLogueado = this.autenticacionService.estaAutenticado()

    this.suscripcion = this.autenticacionService.cambioEstado
      .subscribe(
        (estado: boolean) => {
          this.usuarioLogueado = estado
        }
      )
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe()
  }

  loguear(){
    const usuario: IUsuario = {email: this.email, password: this.password}
    
    this.autenticacionService.login(usuario)

  }

}
