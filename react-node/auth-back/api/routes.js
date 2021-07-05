const controller = require("./controller");

module.exports = (app) => {
	app.route("/auth").get(controller.home);
	app.route("/auth/about").get(controller.about);
	app.route("/auth/signUp").post(controller.signUp);
	app.route("/auth/confirmEmail/:userId/:encryptedKey").get(controller.confirmEmail);
}