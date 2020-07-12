require('dotenv').config({})
const mongoose = require('mongoose')
const {mongoUri} = require('./app.config')
const Promise = require('bluebird')
mongoose.set('debug', true)

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(r => console.log())

const User = require('./models/users')
const Movies = require('./models/movies')
;
(async () => {
    const users = await Movies.find({})
    const result = users.reduce((result, {genres}) => {
        const g = genres.split(',').reduce((result, i) => ({...result, [i]: true}), {})
        console.log(g)
        return {...result, ...g}
    }, {})
    console.log(Object.keys(result))
    process.exit()
})()
