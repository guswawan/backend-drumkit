const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


//==INIT EXPRESS==//
const app = express();
const PORT = 3000;


//==BODY-PARSER==//
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//==SET MONGOOSE==//
var dev_db_url = "mongodb+srv://admin:adminpass@cluster0-f0h1m.mongodb.net/drumkit?retryWrites=true";


//==CONNECT TO MONGO==//
mongoose.connect(dev_db_url, {
	useNewUrlParser: true
});


//==CEK KONEKSI KE DB==//
var db = mongoose.connection;
db.once("open", () => console.log("Connected Database"));
db.on("error", console.error.bind(console, "MongoDB connection error"));


//API Router
app.use('/v1', require ('./routes/routes'));
app.listen(process.env.PORT || 3000, () => console.log(`Server is up and running on port ${PORT}`));