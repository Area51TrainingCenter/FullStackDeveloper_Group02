import express = require("express")
import {controlador as ctrl} from '../api/controladores/ServidoresControlador'
const router = express.Router()

router.get("/", ctrl.listado)
router.post("/:id", ctrl.insertar)
router.put("/:id", ctrl.actualizar)
router.delete("/:id", ctrl.eliminar)

export {router}