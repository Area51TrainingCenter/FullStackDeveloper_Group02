import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from './interfases';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


@Injectable()
export class AutenticacionService {
	rutaApi: string = "http://localhost:4000"
	autenticado: boolean = false

	constructor(private http: HttpClient, private router: Router) { }

	login(usuario: IUsuario): void {
		this.http.post<IUsuario>(`${this.rutaApi}/auth/login`, usuario, {
			observe: "body",
			responseType: "json"
		}).subscribe(
			(usuario: IUsuario) => {
				localStorage.setItem("accessToken", usuario.accessToken)
				localStorage.setItem("refreshToken", usuario.refreshToken)
				this.autenticado = true
				this.router.navigate(["usuarios"])
			},
			error => {
				console.log(error)
			}
		)
	}

	obtenerNuevoToken(refreshToken: string): Observable<string> {
		return this.http.post<string>(`${this.rutaApi}/auth/nuevo-token`, {refreshToken}, {
			observe: "body",
			responseType: "json"
		})
	}

	estaAutenticado(): boolean {
		return this.autenticado
	}

	logout(): void {
		this.autenticado = false
		localStorage.removeItem("token")
		localStorage.removeItem("refreshToken")
		this.router.navigate([""])
	}

	obtenerUsuarios(): Observable<IUsuario[]> {
		return this.http.get<IUsuario[]>(`${this.rutaApi}/auth/listado`,{
			observe: "body",
			responseType: "json"
		})
	}


}
