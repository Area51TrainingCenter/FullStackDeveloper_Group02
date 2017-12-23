import express = require("express")
import {Request, Response, NextFunction} from "express"
import {controlador as auth} from '../api/controladores/AuthControlador'
import {manejador} from '../api/errores/manejadorErrores'
import {politica} from '../api/politicas/AutenticacionPolitica'

const router = express.Router()

router.post("/login", manejador.cacheo(auth.login))
router.get("/logout", auth.logout)
router.post("/registro", manejador.cacheo(auth.registro))
router.post("/nuevo-token", auth.nuevoAccessToken)
router.get("/listado", politica, manejador.cacheo(auth.listado))

export {router}