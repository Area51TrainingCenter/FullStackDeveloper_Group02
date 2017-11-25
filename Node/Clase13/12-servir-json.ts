import * as http from 'http'


const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	const usuarios = [
		{nombre: "Sergio", rol: "admin"},
		{nombre: "Jana", rol: "operador"}
	]

	res.writeHead(200, {"content-type": "application/json"})
	res.end(JSON.stringify(usuarios))
	
})

servidor.listen(5000, ()=> {
	console.log("Servidor ejecutándose en el puerto 5000")
})