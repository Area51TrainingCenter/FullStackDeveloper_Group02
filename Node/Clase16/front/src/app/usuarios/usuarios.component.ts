import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';
import { IUsuario } from '../interfases';

@Component({
	selector: 'app-usuarios',
	templateUrl: './usuarios.component.html',
	styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
	usuarios: IUsuario[]

	constructor(private auth: AutenticacionService) { }

	ngOnInit() {
	}

	obtenerUsuarios() {
		this.auth.obtenerUsuarios()
			.subscribe(
				(usuarios: IUsuario[]) => {
					this.usuarios = usuarios
				},
				error => {
					console.log(error)
				}
			)
	}

}
