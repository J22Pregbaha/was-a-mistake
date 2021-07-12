from flask import Flask
from flask import jsonify

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello():
    return jsonify({ 'name': 'world' })
