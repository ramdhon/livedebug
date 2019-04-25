require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/phase-2-${process.env.NODE_ENV}`, { useNewUrlParser: true });

const index = require('./routes/index');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', index);

app.listen(PORT, () => {
  console.log(`running on port:${PORT}`);
})

module.exports = app
