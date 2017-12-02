// Declaraciones
import express = require("express")
import {Application, Request, Response, NextFunction} from "express"

// Settings
const app: Application = express()

// Middlewares

// Rutas
app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.type("text/html")
		.send("<strong>Eureka</strong>")
})

// Servidor
app.listen(4000, ()=> {
	console.log("Ejecutando en el puerto 4000")
})