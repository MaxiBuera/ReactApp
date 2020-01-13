const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    image: String,
    email: String,
    firstname: String,
    lastname: String,
})

module.exports = mongoose.model('User', userSchema)