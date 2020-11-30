// (1:06:)W10D2
const express = require('express');
const router = express.Router();

router.post('/add', (reject, response) => {
    console.log("Hello from user.router.js")
    response.send("Adding user");
})

// (1:13:)W10D2
// router.get('/add', (reject, response) => {
//     console.log("Hello from user.router.js")
//     response.send("Adding user");
// })


module.exports = router;