// Declaraciones e importaciones
import express = require("express")
import {Application, Request, Response, NextFunction} from "express"
require("dotenv").config({path: "./variables.env"})
import {parametros} from '../configuraciones/inicializacion'
import morgan = require("morgan")
import favicon = require("serve-favicon")
import {router as rutasDefecto} from '../rutas/index'
import {router as rutasAuth} from '../rutas/auth'
import {router as rutasServidor} from '../rutas/servidores'
import {politica as autenticacionPolitica} from '../api/politicas/AutenticacionPolitica'
import bodyParser = require("body-parser")

var usuarioAutenticado

// Configuraciones
const app: Application = express()
app.set("puerto", parametros.puerto)
app.set("view engine", "pug")
app.set("views", "./vistas")

// Middlewares
app.use(favicon("./favicon.ico"))
app.use(morgan("dev"))
app.use((req: Request, res: Response, next: NextFunction)=>{
	res.locals.titulo = parametros.titulo

	next()
})
app.use(bodyParser.urlencoded({extended: true}))

// Rutas
app.use("/", rutasDefecto)
app.use("/auth", rutasAuth)
app.use("/servidores", autenticacionPolitica, rutasServidor)


// Servidor
app.listen(app.get("puerto"), ()=> {
	console.log(`Ejecutando en el puerto ${app.get("puerto")}`)
})