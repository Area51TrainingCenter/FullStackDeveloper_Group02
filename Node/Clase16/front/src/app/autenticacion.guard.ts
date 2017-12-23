import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AutenticacionService } from './autenticacion.service';

@Injectable()
export class AutenticacionGuard implements CanActivate {
	constructor(private auth: AutenticacionService) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.auth.estaAutenticado()
	}
}
