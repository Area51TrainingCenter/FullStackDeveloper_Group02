import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../auth/seguridad.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private seguridadService: SeguridadService, private ruteador: Router) { }

  ngOnInit() {
  }

  login(){
    this.seguridadService.login()
    this.ruteador.navigate(["servidores"])
  }

}
