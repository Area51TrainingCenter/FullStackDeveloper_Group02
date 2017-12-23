// Declaraciones e importaciones
import express = require("express")
import {Application, Request, Response, NextFunction} from "express"

// Configuraciones
const app: Application = express()
app.set("view engine", "pug")
app.set("views", "./vistas")

// Middlewares
app.use(express.static("public"))

// Rutas
app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.render("home")
})

// Servidor
const servidor = app.listen(4000, ()=> {
	console.log("Ejecutando en el puerto 4000")
})

// Socket.io