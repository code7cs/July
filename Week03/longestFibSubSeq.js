/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-30 01:52:33
 * @LastEditTime: 2020-07-30 01:54:18
 */

var lenLongestFibSubseq = function (A) {
  let N = A.length;
  let index = new Map();
  A.map((v, i) => (index[v] = i));

  let longest = new Map();
  let ans = 0;
  for (let k = 0; k < N; ++k)
    for (let j = 0; j < k; ++j) {
      let i = index[A[k] - A[j]];
      if (i === undefined || i >= j) continue;
      if (longest[i * N + j] === undefined) longest[i * N + j] = 2;

      longest[j * N + k] = longest[i * N + j] + 1;
      ans = Math.max(ans, longest[j * N + k]);
    }

  return ans >= 3 ? ans : 0;
};

let ans = lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(ans);
