function nombreCompleto(nombre, apellido){
	const completo = nombre + " " + apellido
	return completo
}

const nombreCompleto = function(nombre, apellido) {
	const completo = nombre + " " + apellido
	return completo	
}

const nombreCompleto = (nombre, apellido) => {
	const completo = nombre + " " + apellido
	return completo		
}

const nombreCompleto = (nombre, apellido) => {
	return nombre + " " + apellido	
}

const nombreCompleto = (nombre, apellido) => nombre + " " + apellido	

const pasarAMayusculas = (palabra) => palabra.toUpperCase()

const pasarAMayusculas = palabra => palabra.toUpperCase()

const obtenerFecha = () => new Date()
