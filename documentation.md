# Project Documentation

## Project Overview

Be Creative is a program for shating stories, and pictures. It aims to be good program for sharing and commenting.

## Table of Contents
1. Client folder 
 - Public folder 
    1. css folder where the css is
    2. fonds folder where the fond of the program is 
    3. imgages
    4. js folder  for the funtunality  of the html is 

 - src folder
   1. Components folder 
     - where are all the cmponents of the server
     1. 404 page
     2. Dbout page
     3. CreateComponents pages
     4. Details pages
     5. Edit pages
     6. Gallery pages
     7. Header page
     8. Home page
     9. Login page
     10. Register page
     11. Error boundry
     12. Page Border
     13. Preloader
   2. Contexts folder
     - the authentications are here
   3. Guards folder
     - checks if you are authenticated or redirects you to the login page
   4. Helper folder
     - where the request body is declined 
   5. Hooks folder
     - useForm.js is method for all the forms in the project(OnChange, OnSubmit, Values) 
     - usePersistedState.js extends the standard "useState" hook by persisting state to localStorage, facilitating the retention of state data across page reloads or navigation changes.
   6. Service folder
     - this folder is for witing the request for the server. Using the helper folder this sends CRUD requsets  to the server:  
      authservice.js - login, register
      commentService.js - comments on the posts
      imageservice.js - image
      storyImageService- stories with images
      storyservice.js - stories
   7. Utils folder
     - that takes a path and parameters, and utilizes the parameters to replace corresponding placeholders in the path, returning the resulting URL.
   8. App.jsx
     - where all the components come together and form an app
   8. main.jsx
     - targeting the HTML element with the ID 'root,  loads the App
   8. path.jsx
     - where are all the paths that the program uses and are send to the server

2. Server folder
- here is the server data and the server.js where we start the server.
