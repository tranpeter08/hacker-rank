function hourglass(arr) {
  const movesX = arr[0].length - 2;
  const movesY = arr.length - 2;

  const results = [];
  for (let i = 0; i< movesY; i++) {
      for (let j = 0; j < movesX; j++) {
        let top = arr[i].slice(0 + j, 3 + j);
        let mid = arr[i + 1][1 + j];
        let btm = arr[i + 2].slice(0 + j, 3 + j);

        const nums = [...top, mid, ...btm];
        results.push(nums.reduce((total, item) => total + item, 0));
      }
  }

  return (Math.max(...results));
}

module.exports = hourglass;