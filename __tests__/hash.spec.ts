import { hashIt, bcryptHash } from '../src/hash'

describe('Test the hash.ts functions', () => {
    test('hashIt should return hashed sha512 string if a password is provided', () => {
        let value = 'kferVyRL'
        let result = hashIt(value)
        expect(typeof result === 'string').toBeTruthy()
    })
    test('bcryptHash() should return a hashed string if a password is provided', async () => {
        let value = 'XLbGAjpq'
        let result = await bcryptHash(value)
        expect(typeof result === 'string').toBeTruthy()
    })
})