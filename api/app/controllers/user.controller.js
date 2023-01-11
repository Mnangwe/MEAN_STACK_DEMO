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
    
    User.find()
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
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
}

exports.delete = (res, res) => {
    const id = req.params.id

    User.findByIdAndRemove(id)
        .then(data => {
            if(!data){

            }
        })
}