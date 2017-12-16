import {Request, Response, NextFunction} from "express"

const controlador = {
	login: (req: Request, res: Response, next: NextFunction) => {
		const usuario = req.body.usuario
		const contrasena = req.body.contrasena
	
		if(usuario==="sergio@correo.com" && contrasena==="123"){
			req["user"] = {usuario: usuario}
			console.log(req["user"])
			res.redirect("/servidores")
		} else {
			res
				.status(403)
				.redirect("/")
		}
	},
	logout: (req: Request, res: Response, next: NextFunction) => {
		delete req["user"]
		res.redirect("/")
	}
}

export {controlador}
