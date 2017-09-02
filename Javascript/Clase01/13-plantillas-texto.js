const nombre = "Sergio",
	  apellido = "Hidalgo"

console.log(nombre + " " + apellido)

// backstick = `
console.log(`${nombre} ${apellido}`)

let tabla = ""
tabla += "<table>"
tabla += "</table>"

let tablaES6 = `
	<table>
		<tr>
			<td>${nombre}</td>
			<td>${apellido}</td>
		</tr>
	</table>
`

const personas = ["Mariela", "Raymi", "Elder"]

let filasPersonas = "<table>"

const formatoFila = item => {
	return `
		${item.toUpperCase()}
		${new Date()}
	`	
}

personas.forEach( item => {
	filasPersonas += `
		<tr>
			<td>${item.toUpperCase()} ${new Date()}</td>
		</tr>
		<tr>
			<td>${formatoFila(item)}</td>
		</tr>
	`
})

filasPersonas += "</table>"
console.log(filasPersonas)
