import {Request, Response, NextFunction} from "express"
import {parametros} from '../../configuraciones/inicializacion'

interface RespuestaError extends Error {
	status?: number
}

const manejador = {
	cacheo: (ftn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
		return (req: Request, res: Response, next: NextFunction) => {
			return ftn(req, res, next).catch(next)
		}
	},
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

		objError.stack = objError.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>')
		objError.stack = objError.stack.replace(/[a-z_-\d]+.ts:\d+:\d+/gi, '<mark>$&</mark>')
	
		res.render("error", {error: objError})
	}
}

export {manejador}