const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    chatId: {type: Number, required: true, unique: true},
    level: {type: String, default: "Новичок"},
    answers: {type: Number, default: 0},
    attempts: {type: Number, default: 0},
    rewards: {type: Number, default: 0},
})

module.exports = mongoose.model('users', UserSchema)