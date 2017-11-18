/**
 * ServidoresController
 *
 * @description :: Server-side logic for managing servidores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listar: function (req, res, next) {
		Servidores
			.find()
			.then(function (registros) {
				res.json(registros)
			})
			.catch(function (error) {
				res.negotiate(error)
			})
	},

	detalle: function (req, res, next) {
		var datos = req.allParams()
		var filtro = {}
		filtro.idServidor = datos.id

		Servidores
			.find()
			.where(filtro)
			.then(function (registros) {
				res.json(registros)
			})
			.catch(function (error) {
				res.negotiate(error)
			})
	},

	insertar: function (req, res, next) {
		var datos = req.allParams()

		Servidores
			.create(datos)
			.then(function (registros) {
				res.json(registros)
			})
			.catch(function (error) {
				res.negotiate(error)
			})
	},

	actualizar: function (req, res, next) {
		var datos = req.allParams()
		var filtro = {}
		filtro.idServidor = datos.id

		Servidores
			.update(filtro, datos)
			.then(function (registros) {
				res.json(registros)
			})
			.catch(function (error) {
				res.negotiate(error)
			})
	},

	eliminar: function (req, res, next) {
		var datos = req.allParams()
		var filtro = {}
		filtro.idServidor = datos.id

		Servidores
			.destroy(filtro)
			.then(function (registros) {
				res.json(registros)
			})
			.catch(function (error) {
				res.negotiate(error)
			})
	}


};

