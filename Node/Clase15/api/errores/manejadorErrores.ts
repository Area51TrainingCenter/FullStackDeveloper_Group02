import {Request, Response, NextFunction} from "express"
import {parametros} from '../../configuraciones/inicializacion'

interface RespuestaError extends Error {
	status?: number
}

const manejador = {
	noEncontrado: (req: Request, res: Response, next: NextFunction) => {
		const error: RespuestaError = new Error("Ruta no encontrada")
		error.status = 404
	
		next(error)
	},
	general: (error: RespuestaError, req: Request, res: Response, next: NextFunction) => {
		let objError: RespuestaError
		if(parametros.ambiente==="dev") {
			objError = error
		} else {
			objError.name = error.name
			objError.message = error.message
		}
	
		res.render("error", {error: objError})
	}
}

export {manejador}