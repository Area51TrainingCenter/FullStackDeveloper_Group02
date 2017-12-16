import express = require("express")
import {Request, Response, NextFunction} from "express"
import {controlador as auth} from '../api/controladores/AuthControlador'

const router = express.Router()

router.post("/login", auth.login)
router.get("/logout", auth.logout)
router.post("/registro", auth.registro)

export {router}