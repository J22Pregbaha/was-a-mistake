const controller = require("./controller");
const middleware = require('../middleware');

module.exports = (app) => {
	app.route("/content").get(middleware.verify, controller.home);
	app.route("/content/about").get(middleware.verify, controller.about);
}