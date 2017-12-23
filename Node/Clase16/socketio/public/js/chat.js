(function(d){
	d.addEventListener("DOMContentLoaded", function(){
		const socket = io()

		const visor = d.getElementsByClassName("visor")[0],
			  nombre = d.getElementById("nombre"),
			  mensaje = d.getElementById("mensaje"),
			  btnEnviar = d.getElementById("btnEnviar"),
			  estado = d.getElementsByClassName("estado")[0]

		btnEnviar.addEventListener("click", () => {
			socket.emit("mensaje del chat",{
				nombre: nombre.value,
				mensaje: mensaje.value
			})
		})

		mensaje.addEventListener("keypress", ()=>{
			socket.emit("feedback", {nombre: nombre.value})
		})

		socket.on("enviando", data => {
			estado.innerHTML = ""
			visor.innerHTML += `<p><strong>${data.nombre} :</strong></p>${data.mensaje}`
		})

		socket.on("escribiendo", data => {
			estado.innerHTML = `${data.nombre} está escribiendo`
		})


	})
})(document)