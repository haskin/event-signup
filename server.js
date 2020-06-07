const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const db = `${process.env.MONGO_URI}/${process.env.DB_NAME}`
// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('Database connected succesfully...'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});