// (:23:)W10D2
const express = require('express'); // (:24:)W10D2
const mysql = require('mysql');
const cors = require('cors'); //(1:27:)W10D2
const bodyParser = require('body-parser'); //(2:13:)W10D2
const userRoutes = require('./routes/user.route'); // (1:10:)W10D2
const mongodb = require('mongodb').MongoClient; // (:10:)W10D3

const app = new express(); // (0:27:)W10D2
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
})); //(2:15:)W10D2

const router = express.Router();

// (:31:)W10D2
router.get('', (reject, response) => {
    console.log("Response was sent to the browser.")
    response.send("Requested route does not exist.");
});

// (:11:)W10D3
const mongoRouter = express.Router();
mongoRouter.get('', (request, response) => {
    mongodb.connect('mongodb://root:root_password@localhost:27017', (err, db) => {
        if (err) {
            console.log('Huston, we have a problem:')
            console.log(err)
        }

        const dbInstance = db.db('shop-i'); // (:20:)W10D3

        // const product = {
        //     name: "Car",
        //     price: 1000
        // }

        const product = {
            name: "Cool Harry",
            category: "books"
        }

        const product1 = { //(:33:)
            name: "Steel",
            category: "books",
            pages: 300,
        }

        const product2 = { //(:33:)
            name: "Lord of",
            category: "books",
            pages: 500,
        }

        // (:23:)W10D3
        dbInstance.collection("products").insertMany([product, product1, product2], (err, res) => { //(:33:)
            // dbInstance.collection("products").insertOne(product, (err, res) => {
            if (err) {
                console.log(err);
            }
            // response.send(res) //anul: (:27:32)
        })


        // (:37:)W10D3
        dbInstance.collection("products").findOneAndUpdate({
            name: "Steel"
        }, {
            $set: {
                name: "What a book",
                author: "Cool guy",
                release_date: "01.01.2020"
            }
        })
        
        // (:23:)W10D3
        dbInstance.collection("products").find({
            category: "books"
        }, (err, res) => {
            if (err) err;
            res.toArray().then((data) => {
                response.send(data);
            })
        })
    })
    // response.send("Request all good") //anul: (:24:57)
})

app.use('/mongo', mongoRouter); // (:13:)W10D3
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