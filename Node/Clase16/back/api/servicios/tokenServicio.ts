import jwt = require("jwt-simple")
import moment = require("moment")
import randToken = require("rand-token")
import {parametros} from "../../configuraciones/inicializacion"

const tiempoVida = 15, unidad = "seconds"

const refreshTokens = {}

const servicio = {
	crearTokens : (id) => {
		const payload = {
			id: id,
			iat: moment().unix(),
			exp: moment().add(tiempoVida, unidad).unix()
		}
	
		const accessToken = jwt.encode(payload, parametros.secretoToken)
		const refreshToken = randToken.uid(256)
	
		refreshTokens[refreshToken] = id
	
		return {accessToken, refreshToken}
	},
	
	decodificarAccessToken : (accessToken: string) => {
		const promesa = new Promise((resolve, reject) => {
			try {
				const payload = jwt.decode(accessToken, parametros.secretoToken)
	
				resolve(payload.id)
			} catch (error) {
				if(error.message.toLowerCase() === "token expired") {
					reject({
						status: 401,
						message: "El token ha expirado"
					})
				} else {
					reject({
						status: 500,
						message: "El token es inválido"
					})
				}
			}
		})
	
		return promesa
	},
	
	generarNuevoAccessToken : (refreshToken) => {
		if(refreshTokens[refreshToken]) {
			const payload = {
				id: refreshTokens[refreshToken].id,
				iat: moment().unix(),
				exp: moment().add(tiempoVida, unidad).unix()
			}
		
			const accessToken = jwt.encode(payload, parametros.secretoToken)
	
			return {accessToken}
		}
	
		return {status: 500, message: "El refresh token es inválido"}
	}
}

export {servicio}
