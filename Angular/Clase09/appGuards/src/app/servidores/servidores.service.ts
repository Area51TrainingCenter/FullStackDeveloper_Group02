import { Injectable } from '@angular/core';

import { Servidor } from './servidor'

@Injectable()
export class ServidoresService {
  servidores: Array<Servidor> = [
    new Servidor(1, '72 familias, un balón', 'Usado para proyecto de Solgas', 'web', 'Rackspace'),
    new Servidor(2, "Megaplaza", "Web de Megaplaza", "web", "Rackspace"),
    new Servidor(3, "Jigsaw", "API Rest", "Node", "Heroku"),
    new Servidor(4, "Perfumerías Unidas", "Servidor web de PU", "web caché", "Amazon")
  ]

  constructor() { }

  obtenerServidores(): Array<Servidor>{
    return this.servidores.slice()
  }

  grabar(servidor: Servidor){
    console.log(servidor)
    this.servidores.forEach(item => {
      if(item.id === servidor.id) {
        item.descripcion = servidor.descripcion
        item.nombre = servidor.nombre
        item.tipo = servidor.tipo
        item.ubicacion = servidor.ubicacion
      }
    })
    console.log(this.servidores)
  }

  detalle(id: number): Servidor {
    let servidor: Servidor
    this.servidores.forEach(item => {
      if(item.id === +id) servidor = new Servidor(item.id, item.nombre, item.descripcion, item.tipo, item.ubicacion)
    })

    return servidor
  }



}
