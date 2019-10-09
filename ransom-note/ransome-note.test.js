const ransomeNote = require('./ransome-note');

const testCasesYes = [
  ['Give win 1000 today'.split(' '), ['Give', '1000', 'today']],
  ['Need a loan one million'.split(' '), ['Need', 'one', 'million']],
  ['trouble money give else top trouble'.split(' '), ['trouble', 'give', 'money','trouble']]
];

const testCasesNo = [
  ['Give win 1000 today'.split(' '), ['give', '1000', 'today']],
  ['Need a loan one million'.split(' '), ['Need', 'One', 'million']],
  ['trouble money give else top'.split(' '), ['trouble', 'give', 'money','trouble']]
];

describe('ransomeNote()', () => {
  let print;
  console.log = jest.fn(message => print = message);
  it('prints "Yes" if words in notes matches words in magazine', () => {
    testCasesYes.forEach((testCase,i) => {
      ransomeNote(...testCase);
      expect(print).toBe('Yes');
    });
  });

  it('prints "No" if words in magazine do not match notes', () => {
    testCasesNo.forEach((testCase,i) => {
      ransomeNote(...testCase);
      expect(print).toBe('No');
    });
  });
});