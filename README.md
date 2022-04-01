Welcome!

## FaceDetect - Face Detection Website (the back-end)

A light, full-stack project that detects 1 face from a provided link of an image (any format).

Hosted on Heroku: https://facedetect--frontend.herokuapp.com/

### Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [The challenge](#the-challenge)
  - [Limitations](#Limitations)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)

### Overview

With the FaceDetect webapp, the user has the possibility to paste a link to an image file, and have 1 face detected.

FaceDetect uses React for the front-end and NodeJs + PostgreSQL for the back-end.

The back-end and the database are also hosted on Heroku.

### Links

- Live Site URL: (https://facedetect--frontend.herokuapp.com/)
- Main Back-End Server.js File: [Code on Github](https://github.com/AK-Developorama/facedect-api/blob/main/server.js)
- Main Front-End App.js File: [Code on Github](https://github.com/AK-Developorama/facedetect-frontend/blob/master/src/App.js)

### The challenge

Users should be able to:

- see one blue square around a face when submitting and image
- create a new account and a password that is encrypted securely thru bcrypt-nodejs
- return to their account and see how many times they detected images
- log in thru guest mode and skip registration if desired

### Limitations

At the moment only 1 face is detected. I am planning to extend the app soon to detect all faces in the image.

### Screenshots

![](https://res.cloudinary.com/dwtu8mm8m/image/upload/v1636921787/images/facedetect_app3_v5kaii.jpg)
![](https://res.cloudinary.com/dwtu8mm8m/image/upload/v1636922083/images/facedetect_app_in_action_rmfp7k.jpg)

### My process

### Built with

Back-end:

- node.js, express.js
- axios - promise-based HTTP client for the browser and node.js
- bcrypt-nodejs - used to hash the user passwords

- postman for running the express server locally for testing

Database:

- postgreSQL, gui pg admin4

- knex.js to integrate postgrSQL with node

Security

- front- and back-end each need to do their validation

- API key succesfully hidden as Environmental Variable

Front-end:

- react

- clarifai api (now support for JS is discontinued but project still works)

- tachyons
