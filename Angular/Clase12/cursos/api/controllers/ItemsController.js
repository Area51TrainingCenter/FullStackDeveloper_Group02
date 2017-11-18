/**
 * ItemsController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listar: function (req, res, next) {
		Items
			.find()
			.populate("idTema")
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
		filtro.idItem = datos.id

		Items
			.find()
			.populate("idTema")			
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

		Items
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
		filtro.idItem = datos.id

		Items
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
		filtro.idItem = datos.id

		Items
			.destroy(filtro)
			.then(function (registros) {
				res.json(registros)
			})
			.catch(function (error) {
				res.negotiate(error)
			})
	}	
};

