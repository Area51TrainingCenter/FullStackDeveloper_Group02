import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';
import { IUsuario } from '../interfases';
import { NgForm } from "@angular/forms"

@Component({
	selector: 'app-autenticacion',
	templateUrl: './autenticacion.component.html',
	styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent implements OnInit {
	usuario: IUsuario = {
		correo: "",
		contrasena: ""
	}

	constructor(private auth: AutenticacionService) { }

	login() { 
		this.auth.login(this.usuario)
	}

	ngOnInit() {
	}

}
