// (1:36:)W10D2

// (1:42/51/52:)W10D2
const app = require('../app');


// (1:36:)W10D2
// const add = (request, response) => {
exports.add = (request, response) => {
    // (2:03:)W10D2
    // console.log(request);
    const data = request.body;
    const username = data.username;
    const password = data.password;

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
}

// module.exports = {
//     add: add
// }

// (1:42:)W10D2 send SQL to DB server