import { Component, OnInit, OnDestroy } from '@angular/core';
import { AutenticacionService } from '../../seguridad/autenticacion.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit, OnDestroy {
  usuarioLogueado: boolean = false
  suscripcion: Subscription

  constructor(private autenticacion: AutenticacionService) { }

  ngOnInit() {
    this.usuarioLogueado = this.autenticacion.estaAutenticado()

    this.suscripcion = this.autenticacion.cambioEstado
      .subscribe(
        (estado:boolean) => {
          this.usuarioLogueado = estado
        }
      )

  }

  logout(){
    this.autenticacion.logout()
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe()
  }

}
