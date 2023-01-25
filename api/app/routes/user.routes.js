module.exports = app => {
    const controller = require("../controllers/user.controller")
    const router = require("express").Router()

    router.get('/', controller.findAll)
    router.post('/', controller.create)
    router.get('/:id', controller.findOne)
    router.put('/:id', controller.update)
    router.delete('/:id', controller.delete)
    // router.delete('/many', controller.)

    app.use("/api/users", router)
}