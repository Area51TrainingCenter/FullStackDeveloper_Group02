import express = require("express")
import { Application, Request, Response, NextFunction } from "express"


const usuarios = [
	{nombre: "Sergio", area: 1},
	{nombre: "Alejandro", area: 1},
	{nombre: "Jana", area: 2},
	{nombre: "Tony", area: 1},
	{nombre: "Marjorie", area: 2},
	{nombre: "Evelyn", area: 3}
]

const app: Application = express()

app.set("view engine", "pug")
app.set("views", "./vistas")

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.render("home", {
			titulo: req.query.titulo
		})
})

app.get("/usuarios/:area", (req: Request, res: Response, next: NextFunction) => {
	const area = +req.params.area
	const nombreArea = req.query.area

	console.log(nombreArea)

	const personas = usuarios.filter(usuario => usuario.area === area)

	res
		.status(200)
		.type("application/json")
		.json(personas)
})

app.listen(5000, () => console.log("Servidor ejecutándose en el puerto 5000"))