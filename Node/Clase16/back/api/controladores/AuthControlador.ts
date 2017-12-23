import {Request, Response, NextFunction} from "express"
import {modelo as UsuarioModelo} from '../modelos/UsuarioModelo' 
import {servicio as servicioTokens} from "../servicios/tokenServicio"

const controlador = {
	login: async (req: Request, res: Response, next: NextFunction) => {
		const usuario = req.body.usuario
		const contrasena = req.body.contrasena
		
		const registro:any = await UsuarioModelo.find({usuario: usuario, contrasena: contrasena})

		if(registro.length > 0) {
			const tokens = servicioTokens.crearTokens(registro[0]._id)
			return res
					.status(200)
					.json(tokens)
		}

		return res
			.status(409)
			.send("No está autenticado")

		
	},
	logout: (req: Request, res: Response, next: NextFunction) => {
		delete req["session"]["usuario"]
		res.redirect("/")
	},
	registro: async (req: Request, res: Response, next: NextFunction) => {
		console.log("registro")
		const usuario: any = new UsuarioModelo()
		usuario.usuario = req.body.usuario
		usuario.contrasena = req.body.contrasena

		const registro = await usuario.save()

		console.log(registro)

		const tokens = servicioTokens.crearTokens(registro._id)

		return res
				.status(201)
				.json(tokens)
	},
	nuevoAccessToken: (req: Request, res: Response, next: NextFunction) => {
		const refreshToken = req.body.refreshToken

		console.log("Refresh Token", refreshToken)

		const token: any = servicioTokens.generarNuevoAccessToken(refreshToken)

		if(token.status){
			return res
					.status(token.status)
					.send("No está autenticado")
		} else {
			return res
					.status(201)
					.json(token)
		}
	},
	listado: async (req: Request, res: Response, next: NextFunction) => {
		const usuarios = await UsuarioModelo.find({})

		return res
				.status(200)
				.json(usuarios)
	}
}

export {controlador}
