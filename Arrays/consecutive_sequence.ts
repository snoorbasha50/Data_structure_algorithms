// 128. Longest Consecutive Sequence
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:

// Input: nums = [1,0,1,2]
// Output: 3
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109


function longestConsecutive(nums: number[]): number {
    let maxLength:number=0
    let set=new Set()
    for(const num of nums){
        set.add(num)
    }
    console.log(set,"set")
    for(var i=0;i<nums.length;i++){
        if(i>0 && nums[i]==nums[i-1]){
            continue
        }
        
        let numberPresentInSet=nums[i]-1
        let count=0
        if(!set.has(numberPresentInSet)){
            while(set.has(nums[i]+count+1)){
                  count++;
            }
        }else{
            continue;
        }
        maxLength=Math.max(maxLength,count+1)
    }
    return maxLength
    
};