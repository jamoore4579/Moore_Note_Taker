// dependencies
const express = require('express');


// set the express app
const app = express();
const PORT = process.env.PORT || 3001

// set data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// setup api and html routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



// set the listener
app.listen(PORT, () => {
    console.log(`Application running on PORT: ${PORT}`);
});