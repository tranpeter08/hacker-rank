const minBribes = require('./min-bribes');

describe('minBribes()', () => {
  let output = [];
  console.log = jest.fn(text => output.push(text));

  beforeEach(() => {
    output = [];
  });

  it('finds mininum bribes', () => {
    minBribes([1,2,3,5,4]);
    expect(output[0]).toBe(1);

    minBribes([1,2, 5,3,4]);
    expect(output[1]).toBe(2);

    minBribes([2,3,5,1,4]);
    expect(output[2]).toBe(4);
  });

  it('finds chaotic lines', () => {
    minBribes([1,2,3,5,4]);
    expect(output[0]).not.toBe('Too chaotic');

    minBribes([1,5,2,3,4]);
    expect(output[1]).toBe('Too chaotic');

    minBribes([4,1,2,3,5]);
    expect(output[2]).toBe('Too chaotic');
  });
});