// dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

// set the express app
const app = express();
const PORT = process.env.PORT || 3001

// set data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));



// set the listener
app.listen(PORT, function() {
    console.log("Application running on PORT: " + PORT);
});