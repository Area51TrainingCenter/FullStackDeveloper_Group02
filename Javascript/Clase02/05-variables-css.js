const inputs = document.querySelectorAll("input")

inputs.forEach(input => {
	input.addEventListener("change", function(){
		const valor = this.value
		const propiedad = this.getAttribute("id")
		const unidades = this.dataset.unidades

		document.documentElement.style.setProperty(`--${propiedad}`,`${valor}${unidades}`)
	})

	input.addEventListener("mousemove", function(){
		const valor = this.value
		const propiedad = this.getAttribute("id")
		const unidades = this.dataset.unidades

		document.documentElement.style.setProperty(`--${propiedad}`,`${valor}${unidades}`)		
	})
})