function minBribes(q) {
  let bribes = 0;
  let sorting = true;
  while (sorting) {
    sorting = false;
    for (let i = 0; i < q.length - 1; i++) {
      if (q[i] - (i + 1) > 2) {
        return console.log('Too chaotic');
      }

      if (q[i] > q[i + 1]) {
        sorting = true;
        bribes++;

        [q[i], q[i + 1]] = [q[i + 1], q[i]];
      }
    }
  }

  console.log(bribes);
}

module.exports = minBribes;