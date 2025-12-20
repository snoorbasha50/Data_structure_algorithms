// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

 

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// Example 3:

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 

// Constraints:

// 1 <= intervals.length <= 105
// intervals[i].length == 2
// -5 * 104 <= starti < endi <= 5 * 104

// solution

var eraseOverlapIntervals = function(intervals) {
    let arr=[]
    for(var i=0;i<intervals.length;i++){
         arr.push({start:intervals[i][0],end:intervals[i][1]})
    }
     arr.sort((a,b)=> a.end-b.end)
    console.log("arr",arr)
    let prevEnd=arr[0].end
    let removals=0
    for(var i=1;i<arr.length;i++){
        if(arr[i].start<prevEnd){
            removals++;
        }else{
            prevEnd=arr[i].end
        }
    }
    console.log("length/count",removals)
    return removals

};