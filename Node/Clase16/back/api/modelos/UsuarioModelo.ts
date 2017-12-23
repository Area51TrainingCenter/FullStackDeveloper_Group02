import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	usuario: String,
	contrasena: String
})

const modelo = mongoose.model("UsuarioModelo", esquema)

export {modelo}