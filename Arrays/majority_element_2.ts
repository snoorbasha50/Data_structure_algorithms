// 229. Majority Element II
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array of size n, find all elements that appear more than ⌊n / 3⌋ times.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow up: Could you solve the problem in linear time and in O(1) space?



function majorityElement(nums: number[]): number[] {
    let candidate1:number|null=null
    let count1:number=0
    let candidate2:number|null=null
    let count2:number=0
    //find possible candidates
    for(const num of nums){
        if(candidate1==num){
            count1++;
        }else if (candidate2==num){
            count2++;
        }else if(count1==0){
            candidate1=num
            count1=1
        }else if(count2==0){
            candidate2=num
            count2=1
        }else{
            count1--;
            count2--;
        }
    }

    //verify candidates
    count1=0
    count2=0
    for(const num of nums){
        if(candidate1==num){
            count1++;
        }
       if(candidate2==num){
            count2++;
        }
    }
    let result:number[]=[]
    if(count1>nums.length/3){
        result.push(candidate1 as number)
    }
    if(count2>nums.length/3){
        result.push(candidate2 as number)
    }
    return result
    

};