const lugares = document.querySelectorAll(".lugar")

lugares.forEach(lugar => {
	lugar.addEventListener("click", function(){
		lugares.forEach(lugar => lugar.classList.remove("seleccionado"))

		this.classList.add("seleccionado")
	})

	lugar.addEventListener("transitionend", function(){
		lugares.forEach(lugar => lugar.classList.remove("desplegar"))
		
		this.classList.add("desplegar")		
	})
})
