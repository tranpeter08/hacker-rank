const minSwaps = require('./min-swaps');

describe('minSwaps()', () => {
  it('returns no swaps', () => {
    expect(minSwaps([1,2,3,4,5])).toBe(0);
    expect(minSwaps([1,2,3,4,5,6,7,8,9,10])).toBe(0);
  });

  it('returns swaps', () => {
    expect(minSwaps([5,2,3,4,1])).toBe(1);
    expect(minSwaps([3,2,5,4,1])).toBe(2);
    expect(minSwaps([10,2,3,4,5,6,7,8,9,1])).toBe(1);
    expect(minSwaps([4,2,3,10,5,6,7,8,9,1])).toBe(2);
    expect(minSwaps([4,2,3,10,5,6,7,8,1,9])).toBe(3);
  });
});