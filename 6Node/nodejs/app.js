// (:23:)W10D2
const {
    response
} = require('express');
const express = require('express');
const mysql = require('mysql');

const app = new express();
const router = express.Router();

router.get('', (reject, response) => {
    console.log("Response was sent to the browser.")
    response.send("Requested route does not exist.");
});

app.use('*', router);

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'shop-i' //xampp must be started
})

db.connect((error) => {
    if (error) {
        throw error
    }
    console.log("Connected to database");
})

app.listen(8002, () => {
    console.log('Fine!! Server is up on localhost on http://localhost:8002') //not a browsers console
    //run in terminal: node app.js
})