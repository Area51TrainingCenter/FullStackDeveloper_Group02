console.time("proceso")

console.log("Inicio")

setTimeout(()=>{
	let salida = 0
	let indice
	
	for(indice=0; indice <= 50e6; indice++) salida++

	console.log("Fin del for")
})


console.log("Fin")
console.timeEnd("proceso")