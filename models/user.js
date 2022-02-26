const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    city: String,
    age: Number,
    password: String,
    id: String
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel