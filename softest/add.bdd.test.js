// add.bdd.test.js

const add = require('./add.js'); 

describe('Add Function', () => {
    describe('when adding two positive numbers 1 and 2', () => {
        it('should return the correct sum 3', () => {
            expect(add(1, 2)).toBe(3);
        });
    });

    describe('when adding a negative and a positive number -1 and 1', () => {
        it('should return the correct sum 0', () => {
            expect(add(-1, 1)).toBe(0);
        });
    });

    describe('when adding two zeros ', () => {
        it('should return zero ', () => {
            expect(add(0, 0)).toBe(0);
        });
    });

    describe('when adding a positive number and zero 5 and 0', () => {
        it('should return the positive number 5', () => {
            expect(add(5, 0)).toBe(5);
        });
    });

    describe('when adding two negative numbers -2 and -3', () => {
        it('should return the correct sum -5', () => {
            expect(add(-2, -3)).toBe(-5);
        });
    });
});