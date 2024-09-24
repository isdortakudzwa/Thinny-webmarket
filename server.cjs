//server.js

const express = require("express");
const app = express();

app.listen(8000, () => {
	console.log("Server Started at port no. 8000");
})

//Mongoose library instance
const mongoose = require('mongoose');
//URL of MongoDB Database
const mongoDBURL = 'mongodb://127.0.0.1:27017/mydemoDB';

//connect to Database
mongoose.connect(mongoDBURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => { console.log("Connection Successfull") })
	.catch((err) => { console.log("Received an Error") })
