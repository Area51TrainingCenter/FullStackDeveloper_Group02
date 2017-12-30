// Declaraciones e importaciones
import express = require("express")
import { Application, Request, Response, NextFunction } from "express"
import socket = require("socket.io")

// Configuraciones
const app: Application = express()
app.set("view engine", "pug")
app.set("views", "./vistas")
app.set("port", process.env.PORT || 4000)

// Middlewares
app.use(express.static("public"))

// Rutas
app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.render("home")
})

// Servidor
const servidor = app.listen(app.get("port"), () => {
	console.log(`Ejecutando en el puerto ${app.get("port")}`)
})

// Socket.io
const io = socket(servidor)

const usuarios = []

io.on("connection", socket => {
	console.log("Conexión detectada", socket.id)

	usuarios.push({
		socket: socket,
		datosUsuario: {}
	})

	socket.on("mensaje del chat", data => {
		console.log(data)
		//socket.emit("enviando", data)
		//socket.broadcast.emit("enviando", data)
		io.emit("enviando", data)
	})

	socket.on("feedback", data => {
		socket.broadcast.emit("escribiendo", data)
	})

	io.on("disconnect", socket => {

	})
})