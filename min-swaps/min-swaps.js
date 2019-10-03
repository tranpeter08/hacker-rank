function minSwaps(arr = []) {
  const pos = {};
  let swaps = 0;

  for (let i = 0; i < arr.length; i++) {
    pos[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      let loc = pos[i + 1];
      pos[i + 1] = i;
      pos[arr[i]] = loc;
      [arr[i], arr[loc]] = [arr[loc], arr[i]]

      swaps++
    }
  }

  return swaps;
}

module.exports = minSwaps;