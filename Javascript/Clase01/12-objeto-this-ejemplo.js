function Usuario() {
	this.id = 50
	this.userName = "lib001"

	this.listarTareas = () => {
		console.log(this.userName + " tiene 20 tareas")
	}

	this.listarTareasTodas = function(){
		console.log(this.userName + " no tiene más tareas")
	}

	this.mostrarUsuario = function(){
		console.log(enMayuscula())
	}

	const enMayuscula = ()=>{
		return this.userName.toUpperCase()
	}

	this.obtenerFecha = function(){
		return fechaDeHoy()
	}

	const etiqueta = "Hoy es "
	this.mensaje = "Hola Sergio, "

	const fechaDeHoy = () => {
		return this.mensaje + etiqueta + (new Date())
	}

	function lista(){
		
	}
}

const usuario = new Usuario()
usuario.listarTareas()
usuario.listarTareasTodas()
usuario.mostrarUsuario()
console.log(usuario.obtenerFecha())