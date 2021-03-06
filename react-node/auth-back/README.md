# Table of contents

* [General info](#general-info)
* [Setup info](#setup-info)
* [Technologies](#technologies)
* [Status](#status)
* [To do](#to-do)

## General info

This is the mircroservice setup to send the confirmation mail (or any other mail the system may need).

The database configurations and secret key are included in the environmental variables file which isn't available for security reasons.

## Setup info

After installing the node_modules, all you need do is store the environmental variables by creating a .env file with the following contents

```text
DB_HOST=your_db_host
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=myAuthDb
SECRET=your_secret_key
```

The db name is myAuthDb because that's what I named mine and that is what is in the sql file included in the main folder. The sql file contains the db I created for the microservice.

Then run the following command:

```bash
npm start
```

## Technologies

* Node.js

## Status

Finished but I'm opening to suggestions on improvements.

## To do

* [ ] Make e-mail unique i.e. users can use e-mail to sign up only once
* [ ] Don't let user login until credentials are correct
