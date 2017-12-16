import {Request, Response, NextFunction} from "express"

const controlador = {
	listado: (req: Request, res: Response, next: NextFunction) => {
		res.render("listadoServidores")
	},
	insertar: (req: Request, res: Response, next: NextFunction) => {
		res.redirect("/servidores")
	},
	actualizar: (req: Request, res: Response, next: NextFunction) => {
		res.redirect("/servidores")
	},
	eliminar: (req: Request, res: Response, next: NextFunction) => {
		res.redirect("/servidores")
	}
}

export {controlador}