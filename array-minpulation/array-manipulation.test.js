const arrayManipulation = require('./array-manipulation');

describe('arrayManipualtion()', () => {
  it('returns a max', () => {
    const n1 = 10;
    const q1 = [
      [1, 6, 10],
      [3, 8, 10],
      [5, 10, 10]
    ];

    expect(arrayManipulation(n1, q1)).toBe(30);

    const n2 = 10;
    const q2 = [
      [1, 3, 10],
      [4, 7, 10],
      [7, 10, 10]
    ];

    expect(arrayManipulation(n2, q2)).toBe(20);

    const n3 = 10;
    const q3 = [
      [1, 2, 10],
      [3, 5, 10],
      [6, 10, 10]
    ];

    expect(arrayManipulation(n3, q3)).toBe(10);

    const n4 = 15;
    const q4 = [
      [1, 2, 10],
      [3, 5, 10],
      [1, 10, 10]
    ];

    expect(arrayManipulation(n4, q4)).toBe(20);

    const n5 = 100;
    const q5 = [
      [1, 2, 10],
      [3, 5, 10],
      [1, 10, 10]
    ];

    expect(arrayManipulation(n5, q5)).toBe(20);
  });
});