const cal = require('./calculator');

describe('calculator basic ops', function () {
    test('add 1 + 2 to equal 3', () => {
        expect(cal.add(1, 2)).toBe(3);
    });

    test('subtract 5 - 4 to equal 1', () => {
        expect(cal.subtract(5, 4)).toBe(1);
    });

    test('multiply 3 * 7 to equal 21', () => {
        expect(cal.multiply(3, 7)).toBe(21);
    });  

    test('divide 21 * 7 to equal 3)', () => {
        expect(cal.divide(21, 7)).toBe(3);
    });

    test('sqrt of 64 to equal TBD)', () => {
        // TODO: to be implemented
        expect(() => cal.sqrt(64)).toThrowError(TypeError);
    });

    test('2 to the power of 4 to equal TBD)', () => {
        // TODO: to be implemented
        expect(() => cal.pow(2, 4)).toThrowError(TypeError);
    });
});
