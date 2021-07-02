require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routes = require("./api/routes");
routes(app);
app.listen(port, function() {
    console.log('Server now listen on port:', port);
})