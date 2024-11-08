const multiply = require('./multiply.js');
test('multiply 1 x 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
});