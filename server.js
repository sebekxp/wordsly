require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require("body-parser");
const cors = require('cors');


const words = require('./routes/api/words');
const users = require('./routes/api/users');

const app = express();

app.use(express.json(), cors());

// Body parser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
const db = process.env.mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require('./passport')(passport);

// Routes
app.use('/api/words', words);
app.use('/api/users', users);

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server started on port ${port}`));