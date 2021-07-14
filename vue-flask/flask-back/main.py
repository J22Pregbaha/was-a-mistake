import os
import MySQLdb.cursors
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from datetime import timedelta

app = Flask(__name__)
bcrypt = Bcrypt(app)

app.config['MYSQL_HOST'] = os.environ.get("MYSQL_HOST")
app.config['MYSQL_USER'] = os.environ.get("MYSQL_USER")
app.config['MYSQL_PASSWORD'] = os.environ.get("MYSQL_PASSWORD")
app.config['MYSQL_DB'] = os.environ.get("MYSQL_DB")

app.config["JWT_SECRET_KEY"] = os.environ.get("SECRET")
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=31)

mysql = MySQL(app)
jwt = JWTManager(app)

@app.route('/', methods=['GET'])
def index():
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cur.execute("SELECT * FROM unauthorized_users")
    rv = cur.fetchall()
    return jsonify(rv)

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cur.execute(f'SELECT * FROM authorized_users WHERE (email="{email}" AND status=1)')
    account = cur.fetchone()
    if account:
        pw_hash = account["password"]
        if bcrypt.check_password_hash(pw_hash, password):
            access_token = create_access_token(identity=account['id'])
            return jsonify({"account_dets": account, "access_token": access_token})
        else:
            return jsonify({"message": "Password not correct"})
    else:
        return jsonify({"message": "Account not found"})

@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

if __name__ == '__main__':
    app.run()
