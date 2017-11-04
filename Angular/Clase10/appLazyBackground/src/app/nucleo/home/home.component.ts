import { Component, OnInit } from '@angular/core';
import { SeguridadService } from 'app/auth/seguridad.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string
  password: string
  usuarioLogueado: boolean
  constructor(private seguridadService: SeguridadService) { }

  ngOnInit() {
    this.usuarioLogueado = this.seguridadService.estaAutenticado()

    this.seguridadService.cambioEstado
      .subscribe(
        estado => {
          this.usuarioLogueado = estado
        }
      )
  }

  login(){
    this.seguridadService.login(this.username, this.password)
  }

  logout(){
    this.seguridadService.logout()
  }

}
