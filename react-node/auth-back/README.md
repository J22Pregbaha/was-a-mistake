# Table of contents

* [General info](#general-info)
* [Setup info](#setup-info)
* [Technologies](#technologies)
* [Status](#status)

## General info

This is the mircroservice setup to send the confirmation mail (or any other mail the system may need).

The email and password are included in the environmental variables file which isn't available for security reasons.

## Setup info

After installing the node_modules, all you need do is store the environmental variables by creating a .env file with the following contents

```text
DB_HOST=your_db_host
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=myAuthDb
```

The db name is myAuthDb because that's what I named mine and that is what is in the sql file included in this folder. The sql file contains the db I created for the microservice.

## Technologies

* Node.js

## Status

In progess
