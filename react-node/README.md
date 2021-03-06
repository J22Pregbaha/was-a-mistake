# Table of contents

* [Prerequisites](#prerequisites)
* [General Setup info](#general-setup-info)
* [Technologies](#technologies)
* [Status](#status)

## Prerequisites

* Install Node.js and npm from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* Install MySQL Community Server from [https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/) and ensure it is started. Installation instructions are available at [https://dev.mysql.com/doc/refman/8.0/en/installing.html](https://dev.mysql.com/doc/refman/8.0/en/installing.html)

## General info

To setup the environment, clone the repository and install dependencies and read the various READMEs for each file to complete the setup.
It would be easier if you had three separate CLI tabs open.

```bash
git clone https://github.com/J22Pregbaha/was-a-mistake.git
```

```bash
cd was-a-mistake/react-node/auth-back
npm install
```

```bash
cd was-a-mistake/react-node/auth-front
npm install
```

```bash
cd was-a-mistake/react-node/content
npm install
```

```bash
cd was-a-mistake/react-node/mail-node
npm install
```

It is important to note that auth-back is set to run on port 8000, auth-front is set to run on port 3000, content is set to run on port 8001 and mail-node is set to run on port 8080

## Technologies

* ReactJS
* Node.js

## Status

Done. Except, of course, the UI/UX
