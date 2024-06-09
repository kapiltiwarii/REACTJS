let mongoose = require('mongoose')


let userSchema = mongoose.Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    passWord: {
        type: String
    }
})

let Users = mongoose.model('User', userSchema)

module.exports = Users