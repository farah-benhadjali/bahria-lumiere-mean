const mongoose = require('mongoose');
//table user lil database
const CategorieSchema = new mongoose.Schema({
    Cname:{
        type:String,
        required:true,
        min:3,
        max:5
    },
    Desc:{
        type:String,
        required:true,
        min:3,
        max:5
    }
});
//bech ynajem ya9ra l user
//exportation du modele pour les controlleurs
module.exports=mongoose.model("Categorie",CategorieSchema);