const mongoose = require('mongoose');


//table user lil database
const ProduitSchema = new mongoose.Schema({
    //cle etranger bech chnajoutiw produit selon categorie 
    category: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'Categorie',
    },
    Pname:{
        type:String,
        required:true,
        min:3,
        max:5
    },
    Price:{
        type:Number,
        required:true,
    },
    Desc:{
        type:String,
        required:true,
        min:3,
        max:5
    },
    img:{
        type:String,
        required:true,
    }
});

//bech ynajem ya9ra l produit
//exportation du modele pour les controlleurs
module.exports=mongoose.model("Produit",ProduitSchema);