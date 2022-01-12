const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '1234567890'
const symbols = '!#$%&+=-_^@'

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
    let chars = alpha
    hasNumbers ? (chars += numbers) : ''
    hasSymbols ? (chars += symbols) : ''
    return generatePassword(length, chars)
}

const generatePassword = (length, chars) => {
    let pwd = ''
    for (let i = 0; i < length; i++){
        pwd += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return pwd
}

module.exports = createPassword