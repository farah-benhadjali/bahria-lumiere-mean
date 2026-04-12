//mongoose crée une connection entre mangodb et express
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://farahebnhadjali:farah123@cluster0.abexu.mongodb.net/E-commerce')
.then(db => console.log("database connected"))
.catch(console.error());
