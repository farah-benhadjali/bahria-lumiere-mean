const router = require("express").Router();

const Contact = require("../model/contact");

//create ou ajout
   router.post("/savemsg", (req, res) => {
    const contact = new Contact({
      Coname: req.body.Coname,
      email: req.body.email,
      sujet: req.body.sujet,
      msg: req.body.msg,
    });
  
    console.log(contact);
  
    contact.save((err, newContact) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err,
        });
      }
  
      res.status(201).json({
        contact: newContact,
      });
    });
 });

//select all
  router.get('/msglists', (req, res) => {
    Contact.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
   });


//Delete category
  router.delete('/msgdel/:id', (req, res) => {
    Contact.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).send('message supprimé !'))
      .catch(error => res.status(400).json({ error }));
  });

//exportation d tous les routes bech najmou n3aytoulhom f indes.js
  module.exports = router;