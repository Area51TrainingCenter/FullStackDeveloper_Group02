import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../auth/seguridad.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string
  password: string

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit() {
  }

  login(){
    this.seguridadService.login(this.username, this.password)
  }

}
