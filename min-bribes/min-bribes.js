function minBribes(q) {
  const bribes = {};
  let sorting = true;
  while (sorting) {
    sorting = false;
    for (let i = 0; i < q.length - 1; i++) {
      if (q[i] > q[i + 1]) {
        sorting = true;
        if (!bribes[q[i]]) {
          bribes[q[i]] = 1;
        } else {
          bribes[q[i]]++;
        }

        [q[i], q[i + 1]] = [q[i + 1], q[i]];
      }
    }
  }

  let total = 0;
  let isChaos = false;
  for (let [key, value] of Object.entries(bribes)) {
    total+= value;
    if (value > 2) {
      isChaos = true;
    }
  }

  if (isChaos) {
    console.log('Too chaotic');
  } else {
    console.log(total)
  }
}

minBribes([1, 2, 5, 3, 7, 8, 6, 4])

module.exports = minBribes;