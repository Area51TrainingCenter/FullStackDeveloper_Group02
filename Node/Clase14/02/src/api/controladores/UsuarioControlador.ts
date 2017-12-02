import { Request, Response, NextFunction } from 'express'
import Usuario from '../modelos/Usuarios'

const controlador = {
	registro: (req: Request, res: Response, next: NextFunction) => {
		res.render("usuarioFormulario")
	},

	insertar: (req: Request, res: Response, next: NextFunction) => {
		const nombre = req.body.nombre
		const apellido = req.body.apellido
	
		const usuario = new Usuario()
		usuario["nombre"] = nombre
		usuario["apellido"] = apellido
	
		usuario
			.save()
			.then(registro => {
				res.redirect("/usuario")
			})
			.catch(error => {
				res
					.status(500)
					.type("text/plain")
					.send(error)
			})
	
	},

	listar: (req: Request, res: Response, next: NextFunction) => {
		Usuario
			.find({})
			.then(registros => {
				res.json(registros)
			})
			.catch(error => {
				res
					.status(500)
					.type("text/plain")
					.send(error)
			})
	}
}

export {controlador}