window.addEventListener("keydown", function(e){
	const teclaCodigo = e.keyCode
	const teclaPresionada = document.querySelector(`div[data-tecla="${teclaCodigo}"]`)
	const audioSeleccionado = document.querySelector(`audio[data-tecla="${teclaCodigo}"]`)

	if(teclaPresionada && audioSeleccionado){
		teclaPresionada.classList.add("seleccionada")

		audioSeleccionado.currentTime = 0
		audioSeleccionado.play()
	}

	// console.log(e.keyCode)
})

const teclas = document.querySelectorAll(".tecla")
teclas.forEach( tecla => {
	tecla.addEventListener("transitionend", function(e){
		this.classList.remove("seleccionada")
	})
})
