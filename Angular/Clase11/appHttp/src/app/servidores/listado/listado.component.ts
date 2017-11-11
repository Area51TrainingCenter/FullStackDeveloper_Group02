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
    this.listar()
  }

  listar() {
    this.servidoresService.listado()
      .subscribe(
      (registros: IServidor[]) => this.servidores = registros,
      (error: Error) => console.log(error.message)
      )
  }

  nuevo() {
    // this.router.navigate(["servidores", "nuevo"])
    this.router.navigate(["nuevo"], { relativeTo: this.rutaActual })
  }

  eliminar(servidor: IServidor) {
    if (confirm("¿Está seguro de querer eliminar?")) {
      this.servidoresService.eliminar(servidor.idServidor)
        .subscribe(
        (registro: IServidor) => {
          this.listar()
        },

        (error: Error) => {
          console.log(error.message)
        }
        )
    }
  }

  editar(servidor:IServidor) {
    this.router.navigate(["edicion", servidor.idServidor], {relativeTo: this.rutaActual})
  }

}
