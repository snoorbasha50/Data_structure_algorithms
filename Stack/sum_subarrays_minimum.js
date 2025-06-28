// 907. Sum of Subarray Minimums

// avatar
// Discuss Approach
// arrow-up
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of integers arr, find the sum of min(b),
//  where b ranges over every (contiguous) subarray of arr.
//   Since the answer may be large, return the answer modulo 109 + 7.

// Example 1:

// Input: arr = [3,1,2,4]
// Output: 17
// Explanation:
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
// Sum is 17.
// Example 2:

// Input: arr = [11,81,94,43,3]
// Output: 444

// Constraints:

// 1 <= arr.length <= 3 * 104
// 1 <= arr[i] <= 3 * 104

function minimum_sub_arrays(arr) {
  let stack1 = [];
  let stack2 = [];
  let pse = new Array(arr.length).fill(-1);
  let nse = new Array(arr.length).fill(arr.length);

  //find previous smaller element
  for (var i = 0; i < arr.length; i++) {
    while (stack1.length > 0 && arr[stack1[stack1.length - 1]] > arr[i]) {
      stack1.pop();
    }
    if (stack1.length) {
      pse[i] = stack1[stack1.length - 1];
    }
    stack1.push(i);
  }

  //find next smaller element
  for (var i = arr.length - 1; i >= 0; i--) {
    while (stack2.length > 0 && arr[stack2[stack2.length - 1]] >= arr[i]) {
      stack2.pop();
    }
    if (stack2.length) {
      nse[i] = stack2[stack2.length - 1];
    }
    stack2.push(i);
  }

  //calculate
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    const leftCount = i - pse[i];
    console.log("left", leftCount);
    const rightCount = nse[i] - i;
    console.log("right", rightCount);
    const contribution = arr[i] * leftCount * rightCount;
    console.log("contribution", contribution);
    total = total + contribution;
    console.log("Total", total);
    return total;
  }
}
let arr = [11, 81, 94, 43, 3];
minimum_sub_arrays(arr);
