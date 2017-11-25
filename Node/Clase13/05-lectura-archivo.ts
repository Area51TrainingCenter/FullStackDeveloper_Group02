import * as fs from 'fs'

fs.readFile('./archivoALeer.txt', "utf8", (error, texto) => {
	if(error) {
		console.log(error)
		return false
	}

	fs.writeFile("./archivoAEscribir.txt", texto, {encoding: "utf8", flag: "w+"}, (error)=> {
		console.log("texto escrito")
	})
})