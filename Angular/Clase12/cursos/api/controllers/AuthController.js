/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = {
	_config: {
		actions: false,
		shortcuts: false,
		rest: false
	},

	login: function(req, res){
		passport.authenticate("local", {session: true}, function(err, user, info){
		//passport.authenticate("local", function(err, user, info){
			console.log("=============")
			console.log("authenticate")
			console.log(err)
			console.log(user)
			console.log(info)
			console.log("=============")			
			if( err || !user){
				return res.send({
					message: info.message,
					user: user
				})
			}

			req.logIn(user, function(err){
				if(err) res.send(err)
				const token = jwt.sign({
					id: user.id
				}, '123456789', {
					expiresIn: 432000, // In seconds = 5 days
					audience: 'myapp.com',
					issuer: 'myApp'
				});
				user.token = token
				return res.send(user)
			})
		})(req, res)
	},

	logout: function(req, res) {
		req.logout()
		res.json({estado: "logout"})
		//res.redirect("/")
	}
};

