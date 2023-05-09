// Dependencies
// =============================================================
const express = require('express');


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Express app to serve static files
app.use(express.static('public'))


// ROUTER

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// LISTENER

app.listen(PORT, function () {
    console.log('App listening on PORT http://localhost:' + PORT);
});
