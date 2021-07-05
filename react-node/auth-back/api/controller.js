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
	database: process.env.DB_NAME,
	multipleStatements: true
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
			sql += `VALUES ('${name}', '${email}', '${hash}', '${role}', '${encrypted_key}')`;
			
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
	},
	confirmEmail: (req, res) => {
		const userId = req.params.userId;
		const encryptedKey = req.params.encryptedKey;
		
		var checkUserSQL = `SELECT COUNT(*) FROM unauthorized_users WHERE (id=${userId} AND encrypted_key="${encryptedKey}" AND status=1)`;
		con.query(checkUserSQL, (err, result) => {
			if(err) {
				res.json(err);
			} else {
				console.log(result[0]["COUNT(*)"]);
				if (result[0]["COUNT(*)"] == 0) {
					authorizeUser();
				} else {
					res.send(`Mail has already been verified`);
				}
			}
		});
		
		function authorizeUser() {
			var sql = `SELECT * FROM unauthorized_users WHERE (id=${userId} AND encrypted_key="${encryptedKey}")`;
			con.query(sql, (err, result) => {
				if(err || result.length === 0) {
					res.send(`Error: ${err}`);
				} else {
					var completeSignUpSQL = "INSERT INTO authorized_users (name, email, password, role)";
					completeSignUpSQL += `VALUES ('${result[0].name}', '${result[0].email}', '${result[0].password}', '${result[0].role}');`;
					completeSignUpSQL += `UPDATE unauthorized_users SET status=1 WHERE (id=${userId} AND encrypted_key="${encryptedKey}");`;
					con.query(completeSignUpSQL, (err, result) => {
						if(err) {
							res.json(err);
						} else {
							console.log(result);
							res.status(202).json(result);
						}
					});
				}
			});
		}
	}
};

module.exports = controllers;