const {signToken} = require('../../helpers/jwt')
const User = require('../../models/users')
const md5 = require('md5')

module.exports = async (args) => {
    const {password, ...rest} = args
    const hash = md5(password)
    const userId = (await User.countDocuments({})) + 1

    const user = new User({
        ...rest,
        password: hash,
        userId,
    })

    const doc = (await user.save()).toJSON()

    return {token: signToken(doc), user: doc}
}
