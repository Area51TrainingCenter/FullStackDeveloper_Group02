import {Request, Response, NextFunction} from "express"
import {modelo as UsuarioModelo} from '../modelos/UsuarioModelo' 

const controlador = {
	login: async (req: Request, res: Response, next: NextFunction) => {
		const usuario = req.body.usuario
		const contrasena = req.body.contrasena
		
		const registro:any = await UsuarioModelo.find({usuario: usuario, contrasena: contrasena})

		if(registro.length==1){
			req["session"]["usuario"] = registro[0].usuario
			res.redirect("/servidores")
		}

		/*UsuarioModelo
			.find({usuario: usuario, contrasena: contrasena})
			.then((registro: any) => {
				if(registro.length==1){
					req["session"]["usuario"] = registro[0].usuario
					res.redirect("/servidores")
				}
			})
			.catch(error => {
				res.redirect("/login")
			})*/


		/*if(usuario==="sergio@correo.com" && contrasena==="123"){
			req["session"]["usuario"] = usuario
			res.redirect("/servidores")
		} else {
			res
				.status(403)
				.redirect("/")
		}*/
	},
	logout: (req: Request, res: Response, next: NextFunction) => {
		delete req["session"]["usuario"]
		res.redirect("/")
	},
	registro: async (req: Request, res: Response, next: NextFunction) => {
		const usuario: any = new UsuarioModelo()
		usuario.usuario = req.body.usuario
		usuario.contrasena = req.body.contrasena

		await usuario.save()
		res.redirect("/")

		/*usuario
			.save()
			.then(registro => {
				return res.redirect("/")
			})
			.catch(error => {
				res.redirect("/")
			})*/
	}
}

export {controlador}
