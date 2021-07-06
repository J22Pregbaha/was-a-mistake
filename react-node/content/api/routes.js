const controller = require("./controller");
const middleware = require('../middleware');

module.exports = (app) => {
	app.route("/content/home").get(middleware.verify, controller.home);
	app.route("/content/about").get(controller.about);
}