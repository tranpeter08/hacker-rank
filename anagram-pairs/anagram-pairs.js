function sherlockAndAnagrams(s) {
  const pairs = [];
  const count = {};
  let isAnagram = false;

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]]) {
      count[s[i]].push(i);
      if (!isAnagram) {
        isAnagram = true;
      }
    } else {
      count[s[i]] = [i];
    }
  }

  if (!isAnagram) return 0;

  for (let [letter, indexes] of Object.entries(count)) {
    if (indexes.length > 1) {
      pairs.push([letter, letter]);
      between(s, indexes, pairs);

    }
  }

  console.log({count})
  return (pairs)
}

function between(str, indexes, pairs) {
  const repeat = [];
  for (let i = 1; i < indexes.length; i++) {
    const start = indexes[i - 1];
    const end = indexes[i];
    
    if (end - start === 1) {
      if (repeat[0] === undefined) {
        repeat[0] = start;
      } else {
        repeat[1] = indexes[i];
      }
      continue;
    };

    pairs.push([str.slice(start, end), str.slice(start + 1, end + 1)]);
  }

  if (repeat.length) {
    between(str, repeat, pairs);
  }
}

function repeatSet(indexes) {

}

function findSets(count) {

}

const str = 'aaaaababbb';
console.log(sherlockAndAnagrams(str));

// console.log([...str.matchAll(/(ab)/)]);