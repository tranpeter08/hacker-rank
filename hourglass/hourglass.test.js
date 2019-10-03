const hourglass = require('./hourglass');

const arr1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

const arr2 = [
  [-9, -9, -9,  1, 1, 1], 
 [0, -9,  0,  4, 3, 2],
[-9, -9, -9,  1, 2, 3],
 [0,  0,  8,  6, 6, 0],
 [0,  0,  0, -2, 0, 0],
 [0,  0,  1,  2, 4, 0]
];

describe('hourglass()', () => {
  it('finds the max of simple grid', () => {
    expect(hourglass(arr1)).toBe(19);
  });

  it('finds the max of a grid with negative numbers', () => {
    expect(hourglass(arr2)).toBe(28);
  });
});