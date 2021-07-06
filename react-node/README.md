# Table of contents

* [Prerequisites](#prerequisites)
* [General Setup info](#general-setup-info)
* [Technologies](#technologies)
* [To do](#to-do)

## Prerequisites

* Install Node.js and npm from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* Install MySQL Community Server from [https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/) and ensure it is started. Installation instructions are available at [https://dev.mysql.com/doc/refman/8.0/en/installing.html](https://dev.mysql.com/doc/refman/8.0/en/installing.html).

## General info

To setup the environment, clone the repository and install dependencies.
It would be easier if you had three separate CLI tabs open.

```bash
git clone https://github.com/J22Pregbaha/was-a-mistake.git
```

```bash
cd was-a-mistake
cd react-node
cd auth-back
npm install
```

```bash
cd was-a-mistake
cd react-node
cd auth-front
npm install
```

```bash
cd was-a-mistake
cd react-node
cd mail-node
npm install
```

You can start each of them with the command below:

```bash
npm start
```

It is important to note that auth-back is set to run on port 8000 while auth-front is set to run on port 3000 and mail-node is set to run on port 8080

## Technologies

* ReactJS
* Node.js

## To do

* [ ] Make e-mail unique i.e. users can use e-mail to sign up only once
