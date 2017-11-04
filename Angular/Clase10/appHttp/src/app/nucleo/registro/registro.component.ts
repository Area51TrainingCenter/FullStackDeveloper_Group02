import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../seguridad/autenticacion.service';
import { IUsuario } from '../interfaces';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  email: string
  password: string

  // usuarioLogueado: Observable<IUsuario>
  usuarioLogueado: IUsuario

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
  }

  registrar(){
    const datos: IUsuario = {email: this.email, password: this.password}

    // this.usuarioLogueado = this.autenticacionService.registro(datos)
    this.autenticacionService.registro(datos)
      .subscribe(
        (registro:IUsuario) => this.usuarioLogueado = registro,
        (error: any) => console.log(error)
      )
  }

}
