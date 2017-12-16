import express = require("express")
import {Request, Response, NextFunction} from "express"
import {controlador as auth} from '../api/controladores/AuthControlador'
import {manejador} from '../api/errores/manejadorErrores'


const router = express.Router()

router.post("/login", manejador.cacheo(auth.login))
router.get("/logout", auth.logout)
router.post("/registro", manejador.cacheo(auth.registro))

export {router}