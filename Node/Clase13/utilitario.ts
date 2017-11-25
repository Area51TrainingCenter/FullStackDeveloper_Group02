export class miClase {
	obtenerFecha(){
		return new Date()
	}
}

export const contador = arr => arr.length

export const annoActual = 2017

export module RecursosHumanos {
	export class Personal {
		obtenerCapacitaciones() {
			return "obtener capacitaciones"
		}
	}
}

class Matricula {
	listaAlumnos(){
		return "lista de alumnos"
	}
}

const matricula = new Matricula()

const nombreInstitucion: string = "Area51"

export { matricula, nombreInstitucion }