require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const words = require('./routes/api/words');
const app = express();

app.use(express.json());

const db = process.env.mongoURI;

mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

app.use('/api/words/updateKnowWord', words);

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server started on port ${port}`));
