# Table of contents

* [General info](#general-info)
* [Setup info](#setup-info)
* [Technologies](#technologies)
* [Status](#status)
* [To do](#to-do)

## General info

This is the mircroservice setup to send the confirmation mail (or any other mail the system may need).

The email and password are included in the environmental variables file which isn't available for security reasons.

## Setup info

After installing the node_modules, all you need do is store the environmental variables by creating a .env file with the following contents

```text
EMAIL=your_email_address
EMAIL_PASS=your_email_password
```

Make sure you allow third party apps to send mails with you chosen email address.

Then run the following command:

```bash
npm start
```

## Technologies

* Node.js

## Status

Finished (apart from the to do list for extra functionality) but I'm opening to suggestions on improvements.

## To do

* [ ] Check why mails go to spam folder.
* [ ] Add secret key.
