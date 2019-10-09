function ransomeNote(magazine, note) {
  const words = {};

  console.log(magazine, note);
  for (let word of magazine) {
    if (words[word]) {
      words[word]++;
    } else {
      words[word]= 1;
    }
  }

  for (let word of note) {
    if (!words[word]) {
      console.log('No')
      return;
    } else {
      words[word]--;
    }
  }

  console.log('Yes');
}

module.exports = ransomeNote;