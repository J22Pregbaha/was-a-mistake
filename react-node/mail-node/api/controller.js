const properties = require("../package.json");
const nodemailer = require('nodemailer');

var controllers = {
	home: (req, res) => {
		res.write("Hey there. I'm a microservice and I'm mail, *wink*");
		res.end();
	},
	about: (req, res) => {
		var aboutInfo = {
			name: properties.name,
			version: properties.version
		}
		res.json(aboutInfo);
	},
	sendEmail: (req, res) => {
		const receipient = req.body.email;
		const subject = req.body.subject;
		const text = req.body.text;
		var transporter = nodemailer.createTransport({
			service: 'gmail',
			port: 465,
			secure: true,
			auth: {
				user: process.env.EMAIL,
				pass: process.env.EMAIL_PASS
			}
		});

		var mailOptions = {
			from: 'Authorization platform <esiwesportal@covenantuniversity.edu.ng>',
			to: receipient,
			subject: subject,
			text: text
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
				res.status(202).json(info);
			}
		});
	}
};

module.exports = controllers;