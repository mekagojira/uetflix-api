const User = require('../../models/users')
const md5 = require('md5')
const {signToken} = require('../../helpers/jwt')

module.exports = async ({username, password}) => {
    const user = await User.findOne({username}).lean()
    if (!user) throw new Error('User not found')

    const hash = md5(password)
    if (user.password !== hash) throw new Error('Password wrong')

    return {token: signToken(user), user}
}
