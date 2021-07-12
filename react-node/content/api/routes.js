const controller = require("./controller");
const middleware = require('../middleware');

module.exports = (app) => {
	app.route("/home").get(middleware.verify, controller.home);
	app.route("/about").get(controller.about);
}