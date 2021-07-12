const controller = require("./controller");

module.exports = (app) => {
	app.route("/").get(controller.home);
	app.route("/about").get(controller.about);
	app.route("/sendEmail").post(controller.sendEmail);
}