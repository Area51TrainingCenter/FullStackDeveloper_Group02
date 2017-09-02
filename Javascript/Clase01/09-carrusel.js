const animales = document.querySelectorAll('.animal')
const listaClases = ["animal04", "animal03", "animal02", "animal01", "animal05", "animal06", "animal07"]

const boton = document.getElementsByTagName("button")[0]

function asignar(){
	animales.forEach(function(animal, indice){
		listaClases.forEach(function(clase){
			animal.classList.remove(clase)
		})
		//animal.classList.remove("animal01", "animal02", "animal03", "animal04", "animal05", "animal06", "animal07")
		animal.classList.add(listaClases[indice])
	})
}

function mover(){
	const ultimo = listaClases.pop()
	listaClases.unshift(ultimo)

	asignar()
}

boton.addEventListener("click", function(){
	mover()
})

asignar()

setInterval(function(){
	mover()
}, 2000)
