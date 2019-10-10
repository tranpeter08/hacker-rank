function twoStrings(s1, s2) {
  const letters = {};

  for (let letter of s1) {
      letters[letter] = true;
  }

  for (let letter of s2) {
      if (letters[letter]) return 'YES';
  }

  return "NO";
}