// 84. Largest Rectangle in Histogram
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

 

// Example 1:


// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:


// Input: heights = [2,4]
// Output: 4


var largestRectangleArea = function(heights) {
   let monoIncStack=[]
   let MaxArea=0
   for(var i=0;i<heights.length;i++){
    
    while(monoIncStack.length>0 && heights[i]<heights[monoIncStack[monoIncStack.length-1]]){
        let poppedIndex=monoIncStack.pop()
        let leftSmallerIndex=monoIncStack.length > 0
        ? monoIncStack[monoIncStack.length - 1]
        : -1;
        let width=i-leftSmallerIndex-1
        let height=heights[poppedIndex]
        let area=width*height
        MaxArea=Math.max(MaxArea,area)
    }
    monoIncStack.push(i)
   }

   while(monoIncStack.length>0){
        let poppedIndex=monoIncStack.pop()
        let leftSmallerIndex=monoIncStack.length > 0
        ? monoIncStack[monoIncStack.length - 1]
        : -1;
        let width=heights.length-leftSmallerIndex-1
        let height=heights[poppedIndex]
        let area=width*height
        MaxArea=Math.max(MaxArea,area)
   }

   return MaxArea
    
};