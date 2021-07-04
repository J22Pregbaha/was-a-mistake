const controller = require("./controller");

module.exports = (app) => {
	app.route("/mail").get(controller.home);
	app.route("/mail/about").get(controller.about);
	app.route("/mail/sendEmail").post(controller.sendEmail);
}