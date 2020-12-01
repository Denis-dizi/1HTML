// (1:36:)W10D2

// (1:42/51/52:)W10D2
const app = require('../app');
// (2:21:)W10D2
const bcrypt = require('bcrypt');

// (1:36:)W10D2
// const add = (request, response) => {
exports.add = (request, response) => {
    // (2:03:)W10D2
    // console.log(request);
    const data = request.body;
    const username = data.username;
    // const password = data.password;

    // (2:31:)W10D2
    bcrypt.hash(data.password, 1, function (error, hash) {
        const password = hash;
        const sql = `INSERT INTO users (email, password) VALUES("${username}", "${password}")`

        // (1:45/52:)W10D2
        app.db.query(sql, (error, result) => {
            if (error) {
                console.log(error)
                response.send(JSON.stringify({
                    user_saved: false
                }))
                return;
            }
            response.send(JSON.stringify({
                user_saved: true
            }))
        })
    });

    // (2:21:)W10D2
    //     const password = bcrypt.hash(data.password, 1, (error, hash) => {
    //         if (error) {
    //             console.log(error)
    //         }
    //         console.log(hash) //(2:26:)W10D2
    //         return hash;
    //     });

    //     console.log(password) //(2:26:)W10D2

    //     const sql = `INSERT INTO users (email, password) VALUES("${username}", "${password}")`

    //     // (1:45/52:)W10D2
    //     app.db.query(sql, (error, result) => {
    //         if (error) {
    //             console.log(error)
    //             response.send(JSON.stringify({
    //                 user_saved: false
    //             }))
    //             return;
    //         }
    //         response.send(JSON.stringify({
    //             user_saved: true
    //         }))
    //     })
}

// module.exports = {
//     add: add
// }

// (1:42:)W10D2 send SQL to DB server