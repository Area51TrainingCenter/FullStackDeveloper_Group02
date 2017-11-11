import { Component, OnInit } from '@angular/core';
import { ServidoresService } from '../servidores.service';
import { IServidor } from '../iservidor.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  servidores: IServidor[]

  constructor(private servidoresService: ServidoresService, private router: Router, private rutaActual: ActivatedRoute) { }

  ngOnInit() {
    this.servidoresService.listado()
      .subscribe(
        (registros: IServidor[]) => this.servidores = registros,
        (error: Error) => console.log(error.message)
      )
  }

  nuevo(){
    // this.router.navigate(["servidores", "nuevo"])
    this.router.navigate(["nuevo"], {relativeTo: this.rutaActual})
  }

}
