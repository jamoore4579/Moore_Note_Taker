// dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

// set the express app
const app = express();
const PORT = process.env.PORT || 3001

// set data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup api and html routes
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.use(express.static('public'));


// set the listener
app.listen(PORT, function() {
    console.log("Application running on PORT: " + PORT);
});