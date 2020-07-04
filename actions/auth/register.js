const User = require('../../models/users')
const md5 = require('md5')

module.exports = async (args) => {
    const {password, ...rest} = args
    const hash = md5(password)

    const user = new User({
        ...rest,
        password: hash,
    })

    const doc = await user.save()
    return doc.toJSON()
}
