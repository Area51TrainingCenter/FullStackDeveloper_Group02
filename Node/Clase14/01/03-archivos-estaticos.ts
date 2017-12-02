// Declaraciones
import express = require("express")
import {Application, Request, Response, NextFunction} from 'express'

// Settings
const app:Application = express()

// Middlewares
//   app.use("/assets", express.static("public"))
app.use(express.static("public"))

/*app.use("/assets", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.sendFile(__dirname + "/public" + req.url)

	/*res
		.status(200)
		.type("text/plain")
		.send(req.url)*/
//})

// Rutas
app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.type("text/html")
		.sendFile(__dirname + "/home.html")
})

// Servidor
app.listen(4000, ()=>{
	console.log("Ejecutando el puerto 4000")
})