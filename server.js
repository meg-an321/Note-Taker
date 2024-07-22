const express = require('express');
const PORT = process.env.PORT || 3001;
const path = require('path');
const app = express();

// Middleware for JSON parsing
app.use(express.json());



// Middleware for parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// Middleware for routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);