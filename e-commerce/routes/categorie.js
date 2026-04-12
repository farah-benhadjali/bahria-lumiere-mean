const router = require("express").Router();

const Categorie = require("../model/categorie");

//create ou ajout
   router.post("/saveCategorie", (req, res) => {
    const categorie = new Categorie({
      Cname: req.body.Cname,
      Desc: req.body.Desc,
    });
  
    console.log(categorie);
  
    categorie.save((err, newCategorie) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err,
        });
      }
  
      res.status(201).json({
        categorie: newCategorie,
      });
    });
 });

//select all
  router.get('/categorielists', (req, res) => {
    Categorie.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
   });

//select par id
   router.get('/CatById/:id', (req, res) => {
    Categorie.findOne({ _id: req.params.id })
      .then(categorie => res.status(200).json(categorie))
      .catch(error => res.status(404).json({ error }));
  });

//idupdate
  router.get('/get/:id', (req, res) => {
    //let productId = req.params.productId;
    Categorie.findById({ _id: req.params.id })
        .then((categorie) => {
            res.status(200).send(categorie)
        })
        .catch((error) => { console.log(error) });
}
);

//Update category
  router.put('/upcat/:id', (req, res) => {
    Categorie.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
        .then((categorie) => {
            res.status(200).send({message:"updated successfuly"})
        })
        .catch((error) => { console.log(error) });
    });

//Delete category
  router.delete('/Catdel/:id', (req, res) => {
    Categorie.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).send('Categorie supprimé !'))
      .catch(error => res.status(400).json({ error }));
  });

//exportation d tous les routes bech najmou n3aytoulhom f indes.js
  module.exports = router;