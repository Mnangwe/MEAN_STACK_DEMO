module.exports = app => {
    const controller = require("../controllers/user.controller")
    const router = require("express").Router()

    router.get('/', controller.findAll)
    router.post('/', controller.create)
    router.get('/:id', controller.findOne)

    app.use("/api/users", router)
}