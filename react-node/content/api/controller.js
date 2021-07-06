const properties = require("../package.json");

var controllers = {
	home: (req, res) => {
		res.status(200).json(req.user);
	},
	about: (req, res) => {
		var aboutInfo = {
			name: properties.name,
			version: properties.version
		}
		res.json(aboutInfo);
	}
};

module.exports = controllers;