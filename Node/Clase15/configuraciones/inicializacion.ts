const parametros = {
	puerto : process.env.PUERTO,
	titulo: process.env.TITULO,
	secretoSesion: process.env.SECRETO_SESION,
	mongourl: process.env.MONGOURL,
	usuario: process.env.USUARIO,
	contrasena: process.env.CONTRASENA,
	ambiente: process.env.AMBIENTE
}

export {parametros}