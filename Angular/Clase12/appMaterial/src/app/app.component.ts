import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from "./seguridad/autenticacion.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Proyecto API Rest';
  autenticado: boolean = false

  constructor(private auth: AutenticacionService) {
  }

  ngOnInit(){
	  this.autenticado = this.auth.estaAutenticado()

	  this.auth.cambioEstado
	  	.subscribe(
			  (estado: boolean) => this.autenticado = estado
		  )
  }

  logout(){
	  this.auth.logout()
  }
}
