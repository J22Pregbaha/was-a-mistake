# Table of contents

* [Setup info](#setup-info)
* [Technologies](#technologies)
* [Status](#status)

## Setup info

```bash
# Install virtualenv
pip install virtualenv
# Initiate virtualenv
virtualenv venv
# Activate virtualenv
. venv/bin/activate
# Activate virtualenv for Windows
venv\Scripts\activate
#Install Flask and other dependencies on the enviroment
pip install flask Flask-mail python-dotenv
```

This only needs to be done the first time. The only action that will be repeated subsequently is the activation of the virtual environment and running the flask app.

After downloading the packages, all you need do is store the environmental variables by creating a .env file with the following contents

```text
DEBUG=True
FLASK_ENV=development
FLASK_APP=main.py
MAIL_USERNAME=your_email_address
MAIL_PASSWORD=your_email_password
```

Then you can run the application

```bash
#Run the application
flask run -h localhost -p 3000 # I'm using port 3000 so it doesn't clash with the other flask projects
```

## Technologies

* Python
* Flask

## Status

Done.
