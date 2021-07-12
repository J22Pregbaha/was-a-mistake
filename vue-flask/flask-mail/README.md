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
#Install Flask on the enviroment
pip install flask
#Tell the terminal what application to run
export FLASK_APP=main.py
#Tell the terminal what application to run for windows
$env:FLASK_APP = "main.py"
#Run the application
flask run
```

This only needs to be done the first time. The only action that will be repeated subsequently is the activation of the virtual environment and running the flask app.

## Technologies

* Node.js

## Status

In progress.
