const crypto = require('crypto')
const bcrypt = require('bcrypt')
const genSalt = (length) => {
    return crypto.randomBytes(Math.ceil(length/2))
        .toString('hex') 
        .slice(0,length)
}

module.exports.hashIt = (pwd) => {
    const salt = genSalt(10)
    const hash = crypto.createHmac('sha512', salt)
    hash.update(pwd)
    let hashVal = hash.digest('hex')
    return hashVal
}

module.exports.bcryptHash = async (pwd) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(pwd, salt)
    return hash
}
