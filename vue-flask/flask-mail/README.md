# Table of contents

* [Prerequisites](#prerequisites)
* [Setup info](#setup-info)
* [Technologies](#technologies)
* [Status](#status)

## Prerequisites

* Install python and (By default, [pip](https://pypi.org/project/pip/)) from [https://www.python.org/downloads/](https://www.python.org/downloads/)

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
pip install flask
pip install Flask-Mail
pip install python-dotenv
#Tell the terminal what application to run
export FLASK_APP=main.py
#Tell the terminal what application to run for windows
$env:FLASK_APP = "main.py"
#Run the application
flask run
```

This only needs to be done the first time. The only action that will be repeated subsequently is the activation of the virtual environment and running the flask app.

After setting up, all you need do is store the environmental variables by creating a .env file with the following contents

```text
DEBUG=True
FLASK_ENV=development
FLASK_APP=main.py
MAIL_USERNAME=your_email_address
MAIL_PASSWORD=your_email_password
```

## Technologies

* Node.js

## Status

Done.
