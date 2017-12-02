// Declaraciones
import express = require("express")
import {Application, Request, Response, NextFunction} from "express"
import bodyParser = require("body-parser")
import methodOverride = require("method-override")
import * as morgan from 'morgan'
import mongoose = require("mongoose")
import {conexionMongo} from './config/conexiones'
import {router as rutaUsuario} from './rutas/Usuario'

// Settings
const app: Application = express()
app.set("view engine", "pug")
app.set("views", "./vistas")

mongoose.Promise = global.Promise;
mongoose.connect(conexionMongo, {
	useMongoClient: true
})

// Middlewares
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride("_method"))

app.use("/usuario", rutaUsuario)

// Rutas
app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.type("text/plain")
		.send("Home")
})



// Servidor
app.listen(4000, ()=> {
	console.log("Ejecutando en el puerto 4000")
})