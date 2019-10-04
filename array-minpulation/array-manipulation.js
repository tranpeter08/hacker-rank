function arrayManipulation(n, queries) {
  const arr = new Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = 0;
  }

  for (let i = 0; i < queries.length; i++) {
    arr[queries[i][0] -1]+= queries[i][2];
    
    if (queries[i][1] < n) {
      arr[queries[i][1]]-= queries[i][2];
    }
  }

  for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1];
   }

  let max
  for (let i = 0; i< arr.length; i++) {
    if (max === undefined) {
      max = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return max;
}

 module.exports = arrayManipulation;

const q1 = [[1, 2, 1],
  [4, 5, 1],
  [3, 4, 1]
  ];

const q2 = [
  [2, 6, 8],
[3, 5, 7],
[1, 8, 1],
[5, 9, 15]
]

arrayManipulation(10, q2);