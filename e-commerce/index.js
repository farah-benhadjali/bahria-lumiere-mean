const express = require('express');
const authRoute = require ("./routes/auth");
const catRoute = require ("./routes/categorie");
const proRoute = require ("./routes/produit");
const contRoute = require ("./routes/contact");
const userRoute = require("./routes/user");
const cartRoute = require("./routes/cartRoute");





const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/categorie', catRoute);
app.use('/api/produit', proRoute);
app.use('/api/contact', contRoute);
app.use('/uploads', express.static('uploads'));
app.use('/api/user', userRoute);
app.use('/api/cart', cartRoute);

//appel a database.js
require('./database');

//serveur local 
app.listen(3000, () => {
    console.log("port started 3000");
});





