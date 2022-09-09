# Tech-Blog

Building out a tech blog using the MVC (model, view, controller) paradigm was a hands-on experience. In this application I implemented express-sessions, handlebars, bcrypt for hashing passwords, as well as using MySQL and sequelize. One of the troubles I encountered was when testing, on insomnia I can create a user, login a user, and logout a user but does not function correctly on the front end implementation. Although the challenge was not complete, I learned valuable debugging skills and testing routes to get functionality working on backend implementations.

## Screenshots
<img src="assets/Screen Shot 2022-09-08 at 9.53.20 PM.png" alt="img1">
<img src="assets/Screen Shot 2022-09-08 at 9.53.28 PM.png" alt="img2">
<img src="assets/Screen Shot 2022-09-08 at 9.53.43 PM.png" alt="img3">

## Table of Contents
* [Installation](#installation)
* [Issues](#issues)
* [Deployed](#deployed)
* [Questions](#questions)
* [Licenses](#licenses)

## Installation
Dependancies
```
npm install
```
MySQL
```
source db/schema.sql
```
.env variable
```
DB_NAME=techblog_db
DB_USER=root
DB_PASSWORD=
```

Start Application
```
nodemon server.js || node server.js
```

## Issues
Routes are working for home, dashboard, login. Routes created for login and register, but on front end side they're not functioning. On backend using insomnia currently can send a POST request and create a new user, login that user, and log out a user (only working on insomnia, not on front end implementation)

## Deployed
Deployed URL: [Deployed-App](https://tech-blog-ucr.herokuapp.com/)

## Questions
If you have any questions, or want to connect please contact me below:

Github: [Cesar-Infante](https://github.com/Cesar-Infante)

Email: cesar261110@gmail.com

LinkedIn: [Cesar-Infante-LinkedIn](https://www.linkedin.com/in/cesar-infante-a56557222/)
## Licenses
This project falls under the following license(s):

![License](https://img.shields.io/static/v1?label=License&message=None&color=blue)