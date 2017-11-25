/////// FORMA 1
import { miClase, contador, annoActual, RecursosHumanos } from './utilitario'

const miclase = new miClase()
console.log(miclase.obtenerFecha())

const usuarios = ["Sergio", "Alejandro", "Javier"]
console.log(contador(usuarios))

console.log(annoActual)

////// FORMA 2
import * as elementos from "./utilitario"

console.log(elementos.annoActual)

////// FORMA 3
import elements = require("./utilitario")
console.log(elements.annoActual)

const personal = new RecursosHumanos.Personal()
console.log(personal.obtenerCapacitaciones())

////// FORMA 4
import "./utilitarioArreglos"

console.log(usuarios["mensaje"]())












