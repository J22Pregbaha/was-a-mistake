const properties = require("../package.json");
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const mysql = require("mysql");

const con = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

con.connect((err) => {
	if (err) throw err;
});

var controllers = {
	home: (req, res) => {
		res.write("Hey there. I'm a microservice and I'm responsible for the authentication");
		res.end();
	},
	about: (req, res) => {
		var aboutInfo = {
			name: properties.name,
			version: properties.version
		}
		res.json(aboutInfo);
	},
	signUp: (req, res) => {
		const name =  req.body.name;
		const email = req.body.email;
		const password = req.body.password;
		const role = 1;
		const encrypted_key = cryptr.encrypt(email);
		
		bcrypt.hash(password, saltRounds, (err, hash) => {
			if (err) throw err;
			var sql = "INSERT INTO unauthorized_users (name, email, password, role, encrypted_key)";
			sql += "VALUES ('"+name+"', '"+email+"', '"+hash+"', '"+role+"', '"+encrypted_key+"')";

			con.query(sql, (err, result) => {
				if(err) {
					res.json(err);
				} else {
					console.log(result);
					result.encrypted_key = encrypted_key;
					res.status(202).json(result);
				}
			});
		});
	}
};

module.exports = controllers;