/**
 * Items.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	idItem: {
		primaryKey: true,
		autoIncrement: true,
		unique: true,
		type: "integer"
	},

	titulo: "string",
	activo: "integer",
	idTema: {
		model: "temas"
	}
  }
};

