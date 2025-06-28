// Median of Two Sorted Arrays
// You are given two integer arrays nums1 and nums2 of size m and n respectively,
//  where each is sorted in ascending order. Return the median value among all elements of the two arrays.

// Your solution must run in
// O
// (
// l
// o
// g
// (
// m
// +
// n
// )
// )
// O(log(m+n)) time.

// Example 1:

// Input: nums1 = [1,2], nums2 = [3]

// Output: 2.0
// Explanation: Among [1, 2, 3] the median is 2.

// Example 2:

// Input: nums1 = [1,3], nums2 = [2,4]

// Output: 2.5
// Explanation: Among [1, 2, 3, 4] the median is (2 + 3) / 2 = 2.5.

function findMedianSortedArrays(nums1, nums2) {
  let arr = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      arr.push(nums1[i]);
      i++;
    } else {
      arr.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    arr.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    arr.push(nums2[j]);
    j++;
  }

  let mid = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
}


findMedianSortedArrays([1, 3], [2, 4]);
