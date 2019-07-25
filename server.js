const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


//INIT EXPRESS
const app = express();
const PORT = 3000;

//body-parser
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set mongoose
// var dev_db_url = "mongodb+srv://admin:adminpass@cluster0-f0h1m.mongodb.net/drumkit?retryWrites=true";

//connect database
// mongoose.connect(dev_db_url, {
// 	useNewUrlParser: true
// });

// var db = mongoose.connection;
// db.once("open", () => console.log("Connected Database"));

//jika tidak connect database
// db.on("error", console.error.bind(console, "MongoDB connection error"));

//API Router
app.use('/v1', require ('./routes/routes'));
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));