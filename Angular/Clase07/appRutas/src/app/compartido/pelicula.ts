interface Comentario {
  usuario: string,
  texto: string
}

export class Pelicula {

  constructor(
      public titulo:string,
      public sinopsis: string,
      public anno: number,
      public genero: string,
      public comentarios?: Array<Comentario>
  ){}
}
