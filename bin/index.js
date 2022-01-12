#!/usr/bin/env node

const program = require("commander")
const { hashIt, bcryptHash } = require('../src/hash') 
const createPassword = require('../src/passgen')

program.option('-l, --length <number>', 'length of the password', '8')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols') 
    .option('-hs, --hash', 'hashes the password with sha512')
    .option('-b, --bcrypt', 'hashes the password using bcrypt.hash()')
    .parse()

const {length, numbers, symbols, hash, bcrypt} = program.opts()

const generatedPwd = createPassword(length, numbers, symbols)

console.log('Password: ' + generatedPwd)

if(hash === true) {
    let hashValue = hashIt(generatedPwd)
    console.log('hashed password: ' + hashValue)
}

if(bcrypt === true) {
    bcryptHash(generatedPwd).then(d => {
        console.log('hashed password: ' + d)
    })
}
