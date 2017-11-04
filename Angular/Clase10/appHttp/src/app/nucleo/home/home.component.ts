import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../seguridad/autenticacion.service';
import { IUsuario } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string
  password: string

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
  }

  loguear(){
    const usuario: IUsuario = {email: this.email, password: this.password}
    
    this.autenticacionService.login(usuario)
      .subscribe(
        (data: IUsuario) => console.log(data),
        (error: any) => console.log(error)
      )

  }

}
