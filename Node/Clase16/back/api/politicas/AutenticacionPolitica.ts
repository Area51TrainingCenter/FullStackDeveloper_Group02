import {Request, Response, NextFunction} from "express"
import {servicio} from "../servicios/tokenServicio"

const politica = (req: Request, res: Response, next: NextFunction) => {
	if(req.headers["authorization"]) {
		const accessToken = req.headers["authorization"].toString().split(" ")[1]

		servicio
			.decodificarAccessToken(accessToken)
			.then(resultado => {
				// const id = resultado
				return next()
			})
			.catch(error => {
				return res
					.status(error.status)
					.json(error)
			})
	} else {
		return res
		.status(409)
		.json({
			status: 409,
			message: "No está autenticado"
		})
	}


}

export {politica}