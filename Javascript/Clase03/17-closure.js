/*
const nombreMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre", "Diciembre"]

const obtenerNombreMes = numMes => {
	console.log(nombreMeses[numMes - 1])
}

obtenerNombreMes(5)
*/


/*
const obtenerNombreMes = numMes => {
	const nombreMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre", "Diciembre"]

	console.log(nombreMeses[numMes - 1])
}

obtenerNombreMes(5)*/

const obtenerNombreMes = function() {
	const nombreMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre", "Diciembre"]

	return (numMes)=>{
		console.log(nombreMeses[numMes - 1])
	}
}

const funcion = obtenerNombreMes()
funcion(5)
funcion(8)
funcion(11)

const servicioHttp = ()=>{
	const apiBase = "http://javascript.tibajodemanda.com"
	const apiInsertar = `${apiBase}/insertar`
	
	const insertar = ()=>{
		console.log("insertar")
	}
	const actualizar = ()=>{
		console.log("actualizar")
	}
	const eliminar = ()=>{
		console.log("eliminar")
	}
	const listar = ()=>{
		console.log("listar")
	}

	return {
		insertar, actualizar, eliminar, listar
	}
}

const miServicio = servicioHttp()

miServicio.insertar()

