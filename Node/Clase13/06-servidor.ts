import * as http from 'http'

const servidor = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
	response.writeHead(200, {"content-type": "text/plain"})
	response.end("Servidor ok")
})

servidor.listen(5000)