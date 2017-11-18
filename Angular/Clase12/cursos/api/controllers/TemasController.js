/**
 * TemasController
 *
 * @description :: Server-side logic for managing temas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listar: function (req, res, next) {
		Temas
			.find()
			.populate("idCurso")
			.populate("idItem")
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
		filtro.idTema = datos.id

		Temas
			.find()
			.populate("idCurso")
			.populate("idItem")			
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

		Temas
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
		filtro.idTema = datos.id

		Temas
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
		filtro.idTema = datos.id

		Temas
			.destroy(filtro)
			.then(function (registros) {
				res.json(registros)
			})
			.catch(function (error) {
				res.negotiate(error)
			})
	}	
};

