import * as mongoose from 'mongoose'

const esquema = new mongoose.Schema({
	nombre: String,
	apellido: String
})

const Usuario = mongoose.model("Usuario", esquema)

export default Usuario