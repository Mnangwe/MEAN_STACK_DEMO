const db = require("../models")
const User = db.user

exports.create = (req, res) => {

    if(!req.body.name) {
        res.status(400).send({ message: "The name cannot be empty!" })
        return
    }

    const user = new User(req.body)

    user.save(user)
        .then(data => {
            res.status(201).send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
}

exports.findAll = (req, res) => {
    
    const name = req.query.name
    let condition = name ? { name: { $regex: new RegExp(name), $options: "i" } }  : { }
    
    User.find(condition)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message})
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    User.findById(id)
        .then(data => {
            if(!data){
                return res.status(404).send({ message: `Not found user with id=${id}`})
            }
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
}

exports.update = (req, res) => {
    if(!req.body){
        res.status(400).send({ message: "You did not add any updates" })
        return
    }

    const id = req.params.id

    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if(!data){
                return res.status(404).send({ message: "We could not find the user with id="+id })
            }
            res.status(200).send({ message: "Your profile is successfully updated!!!" })
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
}

exports.delete = (req, res) => {

    const id = req.params.id
    
    User.findByIdAndRemove(id)
        .then(data => {
            if(!data){
                res.status(404).send({ messege: `The user with id=${id} was not found. Maybe it does not exist!`})
            }
            res.status(200).send({ message: "The user was successfully removed!!!"})
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
}