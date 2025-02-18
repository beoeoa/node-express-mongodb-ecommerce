//importing and configuring 'dotenv' package for .env file
'use strict'
require('dotenv').config();

//importing Node core module
const path = require('path');

//importing 3rd Party Packages
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');          //ODM for MongoDB

//importing & initializing session Middleware and MongoDB-backed session Storage
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);  //returns a constructor function
const flash = require('connect-flash');                            //session flash-data package
//const fs = require('fs');



//importing Routes for all Back-End and Front-End view(UI)
const frontEndRoute = require('./routes/User-Interface');
const backEndRoute = require('./routes/Admin-Panel');


//importing 404 Error Middleware
const errorRoute = require('./middleware/404error');      

//===========importing MongoDB database connection file based on MongoDB Driver================//
//const MongoConnection = require('./server/database').MongoConnection;    





//initializing the express framework
const app = express();
const PORT = process.env.PORT || 3000;
const fourHours = 1000 * 60 * 60 * 4;    //in miliseconds


//Setting up the view engine and view folder in the project
app.set('view engine','ejs');
app.set('views','views');


//Configuring the Body-Parser Middleware for parsing request-body 
app.use(bodyParser.urlencoded({ extended: false }));

//Configuring project's folder to serve static files like images,js,CSS files using
//Express's  built in middleware express.static(). 
//This is the relative path from where we launch our node app which is app.js
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin',express.static(path.join(__dirname, 'public/backend'))); //for BackEnd-Admin-Panel




//Configuring the Cookie-Parser and using it as Middleware
app.use(cookieParser('secret'));

//Configuring MongoDB-backed session Storage
const store = new MongoDBStore({
    uri:'mongodb://localhost:27017/ecommerce',
    collection:'session',
    expires: 1000* 60 * 60 * 4
});
// Catch errors
store.on('error', function(error) {
    console.log(error);
});

//Configuring the session Middleware based on MongoDB-backed session Storage
app.use(session({
    secret: "my code",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: fourHours },
    store:store,
    unset:'destroy'
}));

//Configuring connect-flash session-Middleware
app.use(flash());



//Configuring routes for the app and using it as Middleware
app.use(frontEndRoute);
app.use('/admin',backEndRoute);
//404 Error Page Redirection

app.use(errorRoute);




//----------------------Setup and Configure DB Connection with Mongoose----------------------//
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/ecommerce')
        .then(result=>{   
            // app.listen(PORT);
            // console.log(`Server listening on port ${PORT}`);      
            app.listen(PORT, () => {
                console.log(`Database Listining on port: ${PORT}`)
            })
         })
        .catch(err=>{
            console.log(err); 
         }); 


//=====================Configure DB Connection based on MongoDB Driver=======================//

// MongoConnection( ()=>{
//     app.listen(PORT);
// });
