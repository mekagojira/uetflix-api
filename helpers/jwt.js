const jwt = require('jsonwebtoken')
const secret = '123123'

exports.signToken = (value) => {
    return jwt.sign(value, secret)
}

exports.verify = (value) => {
    return jwt.verify(value, secret)
}
