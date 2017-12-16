import jwt = require("jwt-simple")
import randToken = require("rand-token")
import moment = require("moment")
import {parametros} from "../../configuraciones/inicializacion"

const refreshTokens = {}

const servicio = {
	crearToken: (_id: string) => {
		const payload = {
			sub: _id,
			iat: moment().unix(),
			exp: moment().add(5, "minutes").unix()
		}

		const accessToken = jwt.encode(payload, parametros.secretoToken)
		const refreshToken = randToken.uid(256)

		refreshTokens[refreshToken] = _id

		return {accessToken, refreshToken}
	},
	decodificarToken: (token: string) => {
		const promesa = new Promise((resolve, reject) => {
			try {
				const payload = jwt.decode(token, parametros.secretoToken)
				resolve(payload.sub)
			} catch(error){
				if(error.message.toLowerCase()==="token expired"){
					reject({
						status: 401,
						message: "El token expiró"
					})
				} else {
					reject({
						status: 500,
						message: "El token es inválido"
					})
				}

			}

		return promesa

		})
	},
	generarNuevoToken: (refreshToken) => {
		if(refreshTokens[refreshToken]) {
			const payload = {
				sub: refreshTokens[refreshToken],
				iat: moment().unix(),
				exp: moment().add(5, "minutes").unix()
			}
	
			const accessToken = jwt.encode(payload, parametros.secretoToken)

			return accessToken
		} else {
			return {
				message: "El refresh token es inválido"
			}
		}


	}
}

export {servicio}