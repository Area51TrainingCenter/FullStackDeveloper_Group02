import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	nombre: String,
	descripcion: String
})

const modelo = mongoose.model("ServidorModelo", esquema)

export {modelo}

