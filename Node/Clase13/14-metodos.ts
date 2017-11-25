import * as http from 'http'
import fs = require("fs")

const metodosPermitidos = ["get", "post", "put", "delete", "options"]

http
	.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
		console.log(req.url)

		const ruta = req.url.toLowerCase()
		const metodo = req.method.toLowerCase()

		if (metodosPermitidos.indexOf(metodo) < 0) {
			res.writeHead(403, { "content-type": "text/plain" })
			return res.end("Método no permitido")
		}

		if (ruta === "/" && metodo === "get") {
			const readStream = fs.createReadStream("./home.html", "utf8")

			res.writeHead(200, { "content-type": "text/html" })
			readStream.pipe(res)
		} else if (ruta === "/pdf") {
			const readStream = fs.createReadStream("./manual.pdf", "utf8")

			res.writeHead(200, { "content-type": "application/pdf" })
			readStream.pipe(res)
		} else if (ruta === "/usuarios/lista") {
			const usuarios = [
				{ nombre: "Sergio", apellido: "Hidalgo" },
				{ nombre: "Jana", apellido: "Merino" }
			]

			res.writeHead(200, { "content-type": "application/json" })
			res.end(JSON.stringify(usuarios))
		} else {
			res.writeHead(404, { "content-type": "text/plain; charset=utf8" })
			res.end("Página no encontrada")
		}
	})
	.listen(5000, () => {
		console.log("Servidor ejecutándose en el puerto 5000")
	})