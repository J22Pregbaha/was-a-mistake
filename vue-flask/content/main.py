import os
from flask import Flask, jsonify
from flask_jwt_extended import get_jwt_identity, jwt_required, JWTManager

app = Flask(__name__)

app.config["JWT_SECRET_KEY"] = os.environ.get("SECRET")
jwt = JWTManager(app)

@app.route('/', methods=['GET'])
@jwt_required(optional=True)
def index():
    current_identity = get_jwt_identity()
    if current_identity:
        return jsonify(logged_in_as=current_identity)
    else:
        return jsonify(logged_in_as="anonymous user")

# Custom function when an expired token tries to login
@jwt.expired_token_loader
def my_expired_token_callback(jwt_header, jwt_payload):
    return jsonify(code="dave", err="I can't let you do that"), 401

if __name__ == '__main__':
    app.run()