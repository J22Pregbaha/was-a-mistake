# ...was a mistake (A microservice architecture)

> I wanted to buy a bird. A dove to be exact. But when I got to the bird store I was tricked into buying a crow. Now everyone who comes to my house is freaked out by the large bird in my living room. When I see the fear in their eyes, I just tell them straight up; My crow was a mistake.

## General Info

This project is an authentication web application that allows users to sign up and sign in. Once they sign up, an email is sent to them to confirm the email address before they're allowed to sign in. It uses a micro-service architecture and I am attempting to build it using different technologies. First with ReactJS and Node.js, then with VueJS and Flask.

## Status

In progress

## Structure

```yaml
.
├── react-node                 # Contains the web app with the microservice architecture built with ReactJS and NodeJS
│   ├── auth-back              # The microservice for signing up and signing in
│   │   ├── api                # Folder containing the controller and the routes
│   │   ├── myauthdb.sql       # File containing the database  
│   │   ├── README.md          # Setup and general information
│   │   ├── server.js          # JS file to setup server (app starting point)
│   │   └── ...                # Other files...
│   ├── auth-front             # The microservice for signing up and signing in
│   │   ├── public             # Folder containing the static files
│   │   ├── src                # Folder containing the main JS files
│   │   │   ├── components     # Folder containing the front-end components
│   │   │   ├── index.js       # Starting point
│   │   │   ├── setupProxy.js  # File containing the proxies for the microservices
│   │   │   └── ...            # Other files...
│   │   ├── README.md          # Setup and general information
│   │   └── ...                # Other files...
│   ├── mail-node              # The microservice for sending mails
│   │   ├── api                # Folder containing the controller and the routes  
│   │   ├── README.md          # Setup and general information
│   │   ├── server.js          # JS file to setup server (app starting point)
│   │   └── ...                # Other files...
│   └── README.md
└── README.md         
```
