#!/usr/bin/env node

import { z } from "zod";
import { program } from "commander"
import chalk from "chalk";
import gradientString from 'gradient-string'
import logSymbols from 'log-symbols'
import { hashIt, bcryptHash } from './hash' 
import { createPassword } from './passgen'
export { hashIt, bcryptHash } from './hash'
export { createPassword } from './passgen'

const options = z.object({
    length: z.string().regex(/\d/, {message: 'Length must be a number.'}),
    numbers: z.boolean(),
    symbols: z.boolean(),
    hash: z.boolean(),
    bcrypt: z.boolean()
}).partial();

type Options = z.infer<typeof options>;

program
    .name('passwordy')
    .addHelpText('beforeAll', gradientString.rainbow.multiline('    ____                                          __     \n   / __ \\____ ____________      ______  _________/ /_  __\n  / /_/ / __ `/ ___/ ___/ | /| / / __ \\/ ___/ __  / / / /\n / ____/ /_/ (__  |__  )| |/ |/ / /_/ / /  / /_/ / /_/ / \n/_/    \\__,_/____/____/ |__/|__/\\____/_/   \\__,_/\\__, /  \n                                                /____/   \n'))
    .addHelpText('before', chalk.green('A simple secure password generator\n'))
    .addHelpText('afterAll', `\nFor more information visit: ${chalk.cyan('https://github.com/F2BEAR/passwordy#readme')}`)
    .option('-l, --length <number>', 'length of the password')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols') 
    .option('-hs, --hash', 'hashes the password with sha512')
    .option('-b, --bcrypt', 'hashes the password using bcrypt.hash()')
    .parse()

const programOptions = program.opts<Options>()

try{
    options.parse(programOptions)
    
    const generatedPwd = createPassword(programOptions.length ? parseInt(programOptions.length) : 8, programOptions.numbers, programOptions.symbols)

    console.log(`${logSymbols.success} ${chalk.green('Success')}\n ${chalk.green('Password')}: ${generatedPwd}`)

    if(programOptions.hash === true) {
        let hashValue = hashIt(generatedPwd)
        console.log(` ${chalk.green('hashed password')}: ${hashValue}`)
    }

    if(programOptions.bcrypt === true) {
        bcryptHash(generatedPwd).then(d => {
            console.log(` ${chalk.green('hashed password')}: ${d}`)
        })
    }
} catch(err: any | unknown) {
    console.error(`${logSymbols.error} ${chalk.red('Validation Error')}: ${err.issues ? err.issues[0].message : err}`)
}


