const router = require("express").Router();

const Category = require("../model/categorie");
const Product = require("../model/produit");
const multer = require("../multer");

//create ou ajout
   router.post("/saveProduit", multer.upload.single('img'), (req, res) => {
    const product = new Product(
      {category: req.body.category,
      Pname: req.body.Pname,
      Price: req.body.Price,
      Desc: req.body.Desc,
      img: req.file.path}
    );
  
    console.log(product);
  
    product.save((err, newProduct) => {
      if (err) {
        return res.status(401).json({
          err,
        });
      }
  
      res.status(201).json({
        product: newProduct,
      });
    });
 });

//select all
  router.get('/produitlists', (req, res) => {
    Product.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
   });

//select par id
   router.get('/ProById/:id', (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then(product => res.status(200).json(product))
      .catch(error => res.status(404).json({ error }));
  });

//Update produit
  router.get('/get/:id', (req, res) => {
    //let productId = req.params.productId;
    Product.findById({ _id: req.params.id })
        .then((product) => {
            res.status(200).send(product)
        })
        .catch((error) => { console.log(error) });
}
);

//Update category
  router.put('/update/:Id', (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.Id }, { $set: req.body })
        .then((product) => {
            res.status(200).send({message:"updated successfuly"})
        })
        .catch((error) => { console.log(error) });
    });

//Delete category
  router.delete('/Prodel/:id', (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).send('Produit supprimé !'))
      .catch(error => res.status(400).json({ error }));
  });

//FindProductByCategory
router.get("/:category", function (req,res) {
  var categoryName = req.params.category;
  Category.findOne({_id: categoryName}, function(err, c) {
    Product.find({category: categoryName}, function(err, products) {
      if(err)
        console.log(err);
        res.status(200).send({
          name: c.Cname,
          data: products
        })
    })
  })
});


//exportation d tous les routes bech najmou n3aytoulhom f indes.js
  module.exports = router;