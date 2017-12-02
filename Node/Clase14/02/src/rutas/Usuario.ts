import { Request, Response, NextFunction } from 'express'
import express = require("express")
import {controlador} from '../api/controladores/UsuarioControlador'


const router = express.Router()

router.get("/registro", controlador.registro)
router.post("/", controlador.insertar)
router.get("/", controlador.listar)

export  {router}