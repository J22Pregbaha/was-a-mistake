const controller = require("./controller");

module.exports = (app) => {
	app.route("/").get(controller.home);
	app.route("/about").get(controller.about);
	app.route("/signUp").post(controller.signUp);
	app.route("/confirmEmail/:userId/:encryptedKey").get(controller.confirmEmail);
	app.route("/signIn").post(controller.signIn);
}