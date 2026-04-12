const { boolean } = require('@hapi/joi');
const mongoose = require('mongoose');
//table user lil database
const UserSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        min:3,
        max:5
    },
    lname:{
        type:String,
        required:true,
        min:3,
        max:5
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:8
    },
    email:{
        type:String,
        required:true,
        min:6,
        max:8
    }
});
//bech ynajem ya9ra l user
//exportation du modele pour les controlleurs
module.exports=mongoose.model("User",UserSchema);