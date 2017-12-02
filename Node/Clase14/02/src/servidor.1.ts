// Declaraciones
import express = require("express")
import {Application, Request, Response, NextFunction} from "express"
import bodyParser = require("body-parser")
import methodOverride = require("method-override")
import * as morgan from 'morgan'
import * as mongoose from 'mongoose'
import {conexionMongo} from './config/conexiones'

// Settings
const app: Application = express()
app.set("view engine", "pug")
app.set("views", "./vistas")

mongoose.connect(conexionMongo, {
	useMongoClient: true
})

// Middlewares
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride("_method"))

// Rutas
app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.type("text/html")
		.send("<strong>Eureka</strong>")
})

app.post("/", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.type("application/json")
		.send(JSON.stringify(req.body))
})

app.put("/registro", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.type("text/plain")
		.send("Enviado usando el método PUT")
})

app.get("/formulario", (req: Request, res: Response, next: NextFunction) => {
	res.render("formulario")
})

// Servidor
app.listen(4000, ()=> {
	console.log("Ejecutando en el puerto 4000")
})