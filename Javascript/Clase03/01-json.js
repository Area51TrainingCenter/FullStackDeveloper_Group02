const usuario = {}

console.log(usuario)

const persona = {
	nombre: "Sergio",
	institucion: "Area51",
	cursos: ["HTML5", "Javascript", "Angular", "Node", "Phaser"]
}

console.log(persona)

persona.edad = 40

console.log(persona)

persona.nombre = "Fernando"
console.log(persona["nombre"])
console.log(persona)

console.log("Propiedades")
for(let propiedad in persona) {
	console.log(propiedad)
}

const productos = {
	"-jfkajadkdafjsadf": {nombre: "Javier", edad: 20},
	"-ajdfkasdkdjfhfjd": {nombre: "Andrea", edad: 30},
	"-nvjfhfj3873jdddd": {nombre: "Jana", edad: 15},
	"-65jfjikdkdjdkdkd": {nombre: "Mónica", edad: 17}
}

let filas = ""

for(let propiedad in productos){
	console.log(productos[propiedad])
	filas += `
		<tr>
			<td>${productos[propiedad].nombre}</td>
			<td>${productos[propiedad]["edad"]}</td>
		</tr>
	`
}
console.log(filas)