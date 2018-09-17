const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const PORT = 3030;

const routes = require("./api/routes/Articles")


app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nyt-react");

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  

