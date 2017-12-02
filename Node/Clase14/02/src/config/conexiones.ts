// Conexión con MongoDB
const usuarioMongo = "area51"
const passwordMongo = "123456789"
const conexionMongo: string = `mongodb://${usuarioMongo}:${passwordMongo}@ds129066.mlab.com:29066/usuariosarea51`

export {conexionMongo}