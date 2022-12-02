const mongoose = require('mongoose')
const config = require('../config')

module.exports = () => {
    mongoose.connect(config.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true})
    mongoose.Promise = global.Promise
    const db = mongoose.connection
    db.on('connected', () => console.log("---Database connected succesfully---"))
    db.on('error', () => console.log("MongoDB connection error..."))
}