import os
from flask import Flask, request, jsonify
from flask_mail import Mail, Message

app = Flask(__name__)

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.environ.get("MAIL_USERNAME")
app.config['MAIL_PASSWORD'] = os.environ.get("MAIL_PASSWORD")
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

@app.route('/', methods=['POST'])
def index():
    title = request.form['title']
    text = request.form['text']
    msg = Message(title, sender = 'Joshua <jpregbaha@gmail.com>', recipients = ['kenosedeme@gmail.com'])
    msg.body = text
    # mail.send(msg)
    return jsonify({ 'title': title, 'text': text, 'result': 'Sent' })

if __name__ == '__main__':
    app.run()
