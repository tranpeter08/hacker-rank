const leftRotate = require('./left-rotation');


describe('leftRotate()', () => {
  let arr;
  beforeEach(() => {
    arr1 = [1,2,3,4,5]; 
  });

  it('rotates the numbers in the right direction', () => {
    expect(leftRotate(arr1, 1)).toEqual([2,3,4,5,1]);
  });

  it('rotates', () => {
    expect(leftRotate(arr1, 3)).toEqual([4,5, 1,2,3]);
  });

  it('rotates', () => {
    expect(leftRotate(arr1, 9)).toEqual([5,1,2,3,4]);
  });
});