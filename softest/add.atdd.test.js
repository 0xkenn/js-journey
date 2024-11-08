// add.atdd.test.js

const add = require('./add.js'); 

describe('Acceptance Tests for Add Function', () => {
    test('Given two positive numbers, 10 and 5 when added, should return their sum 15', () => {
        expect(add(10, 5)).toBe(15);
    });

    test('Given a negative number and a positive number, -3 and 3 when added, should return their sum 0', () => {
        expect(add(-3, 3)).toBe(0);
    });

    test('Given two zeros, when added, should return zero', () => {
        expect(add(0, 0)).toBe(0);
    });

    test('Given a positive number and zero, when added, should return the positive number', () => {
        expect(add(7, 0)).toBe(7);
    });

    test('Given two negative numbers, when added, should return their sum', () => {
        expect(add(-4, -6)).toBe(-10);
    });
});