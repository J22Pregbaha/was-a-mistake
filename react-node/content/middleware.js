const jwt = require("jsonwebtoken");
const tokenSecret = process.env.SECRET;

exports.verify = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(403).json({error: "Please provide a token"});
    } else {
        jwt.verify(token.split(" ")[1], tokenSecret, (err, value) => {
            err && res.status(500).json({error: 'failed to authenticate token'});
            req.user = value.data;
            next();
        });
    }
}