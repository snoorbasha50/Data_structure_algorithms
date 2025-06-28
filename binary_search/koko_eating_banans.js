// Koko Eating Bananas
// You are given an integer array piles where piles[i] is the number of bananas
// in the ith pile. You are also given an integer h, which represents the number of hours
// you have to eat all the bananas.

// You may decide your bananas-per-hour eating rate of k.
// Each hour, you may choose a pile of bananas and eats k bananas from that pile.
// If the pile has less than k bananas, you may finish eating the pile but you can not eat
//  from another pile in the same hour.

// Return the minimum integer k such that you can eat all the bananas within h hours.

// Example 1:

// Input: piles = [1,4,3,2], h = 9

// Output: 2
// Explanation: With an eating rate of 2, you can eat the bananas in 6 hours.
//  With an eating rate of 1, you would need 10 hours to eat all the bananas (which exceeds h=9),
//  thus the minimum eating rate is 2.

// Example 2:

// Input: piles = [25,10,23,4], h = 4

// Output: 25

function minEatingSpeed(piles, h) {
  let arr = piles.sort();
  let low = 0;
  let high = arr.length - 1;
  let min = Infinity;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    console.log("Mid element", arr[mid]);
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
      console.log("arr ele", arr[i]);
      sum = sum + Math.ceil(arr[i] / arr[mid]);
    }
    if (sum > h) {
      low = mid + 1;
      sum = 0;
    } else {
      if (arr[mid] < min) {
        min = arr[mid];
      }
      high = mid - 1;
      sum = 0;
    }
  }
  console.log("Minimum", min);
}

let ans = minEatingSpeed([25, 10, 23, 4], 4);
console.log("Answer", ans);
