// (:23:)W10D2
const express = require('express'); // (:24:)W10D2
const mysql = require('mysql');
const cors = require('cors'); //(1:27:)W10D2
const bodyParser = require('body-parser'); //(2:13:)W10D2
const userRoutes = require('./routes/user.route') // (1:10:)W10D2

const app = new express(); // (0:27:)W10D2
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //(2:15:)W10D2

const router = express.Router();

// (:31:)W10D2
router.get('', (reject, response) => {
    console.log("Response was sent to the browser.")
    response.send("Requested route does not exist.");
});

// "localhost:8002/users/add" // (1:11:)W10D2
app.use('/users', userRoutes); //(1:06/11:)
app.use('*', router);

// (:47:)W10D2
const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'shop-i' //xampp must be started
})

// (:48:)W10D2
db.connect((error) => {
    if (error) {
        throw error
    }
    console.log("Connected to database");
})

// (0:27:)W10D2
app.listen(8002, () => {
    console.log('Fine!! Server is up on localhost on http://localhost:8002') //not a browsers console
    //run in terminal: node app.js
})

// (1:42:)W10D2
exports.db = db;
