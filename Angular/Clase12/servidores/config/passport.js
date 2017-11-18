var passport = require("passport"),
	LocalStrategy = require("passport-local").Strategy,
	bcrypt = require("bcrypt"),
	JwtStrategy = require('passport-jwt').Strategy,
	ExtractJwt = require('passport-jwt').ExtractJwt

passport.serializeUser(function (user, done) {
	console.log("=============")
	console.log("serializeUser")
	console.log(user.id)
	console.log("=============")
	done(null, user.id)
})

passport.deserializeUser(function (id, done) {
	console.log("=============")
	console.log("deserializeUser")
	console.log(id)
	console.log("=============")
	User.findOne({ id: id }, function (err, user) {
		done(err, user)
	})
})

passport.use(new LocalStrategy({
	usernameField: "email",
	passwordField: "password"
},
	function (email, password, done) {
		console.log("=============")
		console.log("localStrategy")
		console.log(email)
		console.log(password)
		console.log("=============")
		Usuario.findOne({ email: email }, function (err, user) {
			if (err) { return done(err) }
			if (!user) {
				return done(null, false, { message: "Incorrect email" })
			}

			bcrypt.compare(password, user.password, function (err, res) {
				if (!res) {
					return done(null, false, {
						message: "Invalid password"
					})
				}
				var returnUser = {
					email: user.email,
					createdAt: user.createdAt,
					id: user.id
				}

				return done(null, returnUser, {
					message: "Logged In Successfully"
				})
			})
		})
	}
))

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = '123456789';
opts.issuer = 'myApp';
opts.audience = 'myapp.com';

passport.use(new JwtStrategy(opts, function(payload, done) {
	var usuario = {
		email: 'sergiohidalgocaceres@gmail.com',
		createdAt: new Date(),
		id: 10
	}

	return done(null, usuario)

    /*User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });*/
}));