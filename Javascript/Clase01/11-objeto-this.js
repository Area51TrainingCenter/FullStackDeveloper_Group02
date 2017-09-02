function Persona() {
	this.nombre = "Sergio"
	this.apellido = "Hidalgo"

	// var self = this

	this.nombreCompleto = ()=>{
		console.log("Sergio")
		//console.log(this.mayusculas() + " " + this.apellido)
	}

	this.mayusculas = () => {
		// this.nombre = "Carlos"
		return this.nombre.toUpperCase()
	}

	setInterval(()=>{
		// console.log(this.nombre)
	}, 1000)

	//return this

/*	setInterval(function(){
		console.log(self.nombre)
	}, 1000)
*/
}

const persona = new Persona()
console.log(persona)
/*
const personaNueva = Persona()
console.log(personaNueva.nombreCompleto())
*/
// persona.nombreCompleto()