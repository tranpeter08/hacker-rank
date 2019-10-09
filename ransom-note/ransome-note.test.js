const ransomeNote = require('./ransome-note');

const testCasesYes = [
  ['Give win 1000 today'.split(' '), ['Give', '1000', 'today']],
  ['Need a loan one million'.split(' '), ['Need', 'one', 'million']],
  ['trouble money give else top trouble'.split(' '), ['trouble', 'give', 'money','trouble']]
]

describe('ransomeNote()', () => {
  it('prints "Yes" if words in notes matches words in magazine', () => {
    let print;
    console.log = jest.fn(message => print = message);
    testCasesYes.forEach((testCase,i) => {
      ransomeNote(...testCase);
      expect(print).toBe('Yes');
    });
  });
});