import { createPassword } from '../src/passgen'

describe('Tests the passgen.ts functions', () => {
    test('createPassword() should return a strong password by default', () => {
        let result = createPassword(8)
        expect(typeof result === 'string').toBeTruthy()
    })
    test('createPassword() should return a strong password without numbers if hasNumbers is set to false', () => {
        let result = createPassword(8, false)
        expect(/^(\D)+$/gmi.test(result)).toBeTruthy()
    })
    test('createPassword() should return a strong password without numbers if hasSymbols is set to false', () => {
        let result = createPassword(8, true, false)
        expect(/^(\w)+$/gmi.test(result)).toBeTruthy()
    })
})