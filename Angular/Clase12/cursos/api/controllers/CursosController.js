/**
 * CursosController
 *
 * @description :: Server-side logic for managing cursos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listar: function (req, res, next) {
		Cursos
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
		filtro.idCurso = datos.id

		Cursos
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

		Cursos
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
		filtro.idCurso = datos.id

		Cursos
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
		filtro.idCurso = datos.id

		Cursos
			.destroy(filtro)
			.then(function (registros) {
				res.json(registros)
			})
			.catch(function (error) {
				res.negotiate(error)
			})
	}		
};

