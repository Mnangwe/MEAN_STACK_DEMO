module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            name: String,
            surname: String,
            age: Number,
            about: String,
            interest: String,
            strength: String
        },
        { timestamp: true }
    )
    
    schema.method("toJSON", function() {
        const { __v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const User = mongoose.model('users', schema)

    return User
}