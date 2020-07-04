const mongoose = require('mongoose')
const {mongoUri} = require('../app.config')

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
    console.log('DB connected: ' + mongoUri)
})

module.exports = mongoose.connection
