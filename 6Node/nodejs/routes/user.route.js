// (1:06:)W10D2
const express = require('express');
const router = express.Router();
// (1:36:)W10D2
const userController = require('../controllers/user.controller');
// (1:41:)W10D2
router.post('/add', userController.add);

// (1:07:)W10D2
// router.post('/add', (reject, response) => {
//     console.log("Hello from user.router.js")
//     response.send("Adding user");
// })

// (1:13:)W10D2
// router.get('/add', (reject, response) => {
//     console.log("Hello from user.router.js")
//     response.send("Adding user");
// })


module.exports = router;