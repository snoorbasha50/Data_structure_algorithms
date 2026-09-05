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
    var largestArea=0
    var stack=[]
    for(var i=0;i<heights.length;i++){
        while(stack.length>0 && heights[stack[stack.length-1]]>heights[i]){
             let poppedIndex=stack.pop()
             let height=heights[poppedIndex]
             let right=i
             let left=stack.length>0?stack[stack.length-1]:-1
             let width=right-left-1
             let Area=height*width
             largestArea=Math.max(Area,largestArea)
        }
        stack.push(i)
    }
    while(stack.length>0){
             let poppedIndex=stack.pop()
             let height=heights[poppedIndex]
             let right=heights.length
             let left=stack.length>0?stack[stack.length-1]:-1
             let width=right-left-1
             let Area=height*width
             largestArea=Math.max(Area,largestArea)
    }
    return largestArea
    
};