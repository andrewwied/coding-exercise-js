const { test, expect } = require('@jest/globals');
const cyclicPermutations = require('./cyclic-permutations');

test('Entering zero should yield an empty string', () => {
    expect(cyclicPermutations(0)).toEqual('');
});

test('One should only yield itself, followed by a newline', () => {
    expect(cyclicPermutations(1)).toEqual('1\n');
});

test('Test for two', () => {
    expect(cyclicPermutations(2)).toEqual(
        '12\n' +
        '21\n'
    );
});

test('Test for 3', () => {
    expect(cyclicPermutations(3)).toEqual(
        '123\n' +
        '312\n' +
        '231\n'
    );
});

test('Test for 4', () => {
    expect(cyclicPermutations(4)).toEqual(
        '1234\n' +
        '4123\n' +
        '3412\n' +
        '2341\n'
    );
});

test('Test for 5', () => {
    expect(cyclicPermutations(5)).toEqual(
        '12345\n' +
        '51234\n' +
        '45123\n' +
        '34512\n' +
        '23451\n'
    );
});

test('test for 12', () => {
    expect(cyclicPermutations(12)).toEqual(
        '123456789101112\n' +
        '121234567891011\n' +
        '111212345678910\n' +
        '101112123456789\n' +
        '910111212345678\n' +
        '891011121234567\n' +
        '789101112123456\n' +
        '678910111212345\n' +
        '567891011121234\n' +
        '456789101112123\n' +
        '345678910111212\n' +
        '234567891011121\n'
    );
});