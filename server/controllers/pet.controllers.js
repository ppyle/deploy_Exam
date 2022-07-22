const Pet = require("../models/pet.model")

// ...retrieve an array of all documents in the User collection


module.exports.helloWorld = (req, res)=> res.json({message: "hello world"});


module.exports.showAllPets = (req,res) =>{
    Pet.find()
    .then(pets => res.json(pets))
    .catch(err =>{res.json({
        error: err
    })})
}

module.exports.createOne = (req,res) =>{
    Pet.create(req.body)
    .then(newPet => res.json(newPet))
    .catch(err => {res.json({
        error: err
    })})
}


module.exports.findOne = (req,res) =>{
    Pet.findOne({_id: req.params.id})
    .then (pet =>{
        res.json(pet)
    })
    .catch(err => {res.json({
        error: err
    })})
}


module.exports.updateOne = (req,res) =>{
    Pet.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
    .then (pet =>{
        res.json(pet)
    })
    .catch(err => {res.json({
        error: err
    })})
}

module.exports.deleteOne = (req,res) =>{
    Pet.deleteOne({_id: req.params.id})
    .then(pet =>{res.json(pet)})
    .catch(err => {res.json({
        error: err
    })})
}