import express = require("express")
import {Request, Response, NextFunction} from "express"
import {controlador} from "../api/controladores/IndexControlador"

const router = express.Router()

router.get("/", controlador.home)

export {router}