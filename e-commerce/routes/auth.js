//appel lil les routes
const router = require("express").Router();

//appel lil methode de cryptage 
const bcrypt = require("bcryptjs");
//chemin user
const User = require("../model/user");
const config = require("../config");

//validation des données 
const jwt = require("jsonwebtoken");

//Sign UP User
router.post('/signup', async (req, res) => {
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //const { email, password } = req.body;
    const newUser = new User({
        fname:req.body.fname,
        lname:req.body.lname,
        email: req.body.email,
        password: hashedPassword});
    await newUser.save();
	//const token = await jwt.sign({_id: newUser._id}, 'secretkey');
    //res.status(200).json({token});
    res.status(200).json("user succeffuly added");
});

//SignIn User
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    if (!user) return res.status(401).send('The email doen\' exists');
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send("Incorrect Password");
		
    //const token = jwt.sign({_id: user._id,}, 'secretkey');
   
    return res.status(200).json({user, 
         token: jwt.sign({ data: user}, config.secretKey)});

});
//select all
router.get('/userlists', (req, res) => {
    User.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
   });

//Delete user
  router.delete('/userdel/:id', (req, res) => {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).send('user supprimé !'))
      .catch(error => res.status(400).json({ error }));
  });

module.exports=router;