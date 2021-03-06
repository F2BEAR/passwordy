const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '1234567890'
const symbols = '!#$%&+=-_^@'

export const createPassword = (length: number , hasNumbers: boolean = true, hasSymbols: boolean = true) => {
    let chars = alpha
    hasNumbers ? (chars += numbers) : ''
    hasSymbols ? (chars += symbols) : ''
    return generatePassword(length, chars)
}

const generatePassword = (length:number, chars:string) => {
    let pwd = ''
    for (let i = 0; i < length; i++){
        pwd += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return pwd
}
