import crypto from 'crypto'
import bcrypt from 'bcrypt'
const genSalt = (length:number) => {
    return crypto.randomBytes(Math.ceil(length/2))
        .toString('hex') 
        .slice(0,length)
}

export const hashIt = (pwd:string) => {
    const salt = genSalt(10)
    const hash = crypto.createHmac('sha512', salt)
    hash.update(pwd)
    let hashVal = hash.digest('hex')
    return hashVal
}

export const bcryptHash = async (pwd:string) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(pwd, salt)
    return hash
}
