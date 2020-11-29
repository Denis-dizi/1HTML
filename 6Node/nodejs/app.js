// (:23:)W10D2
const express = require('express');

const app = new express();

app.listen(8002, () => {
    console.log('Fine!! Server is up on localhost on http://localhost:8002') //not a browsers console
    //run in terminal: node app.js
})