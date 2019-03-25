var express = require('express');
var router = express.Router();
var UserCollection = require('../models/pokemonModel');


router.get('/findByID/:id', (req, res)=> {
   UserCollection.find({id:req.params.id}, (errors, results)=>{
       if (errors) res.send(errors);
       else res.send(results);
   })
});

router.get('/findByName/:name', (req, res)=> {
    UserCollection.find({name:req.params.name}, (errors, results)=>{
        if (errors) res.send(errors);
        else res.send(results);
    })
});

router.get('/findByUsername/:username', (req, res)=> {
    UserCollection.find({username:req.params.username}, (errors, results)=>{
        if (errors) res.send(errors);
        else res.send(results);
    })
});

router.get('/update/:id/:name/:username/:email', (req, res)=> {
    UserCollection.updateOne(
        {id:req.params.id},
        {   name: req.params.name,
            username: req.params.username,
            email: req.params.email,
        },
        (errors, results)=>{
        if (errors) res.send(errors);
        else res.send(results);
    })
});

router.get('/updateCompanyById/:id/:name/:catchphrase/:bs', (req,res)=>{
    UserCollection.updateOne(
    {id: req.params.id},
        {company:
                {name: req.params.name,
                catchPhrase: req.params.catchphrase,
                bs: req.params.bs}
        },
        (errors)=>{
        if (errors) res.send(errors);
        else res.send("Updated!!!!!");
        }
    )
});


module.exports = router;