function leftRotate(a = [], d) {
  let rem;

  if (d % a.length > 0) {
    rem = d % a.length;
  } else {
    rem = d;
  }

  const removed = a.splice(0, rem);

  return [...a, ...removed];

  // while (d > 0) {
  //   a.unshift(a.pop());
  //   d--;
  // }

  // return a.join(' ');
}

module.exports = leftRotate;