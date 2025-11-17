// 131. Palindrome Partitioning

// avatar
// Discuss Approach
// arrow-up
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]


var combinationSum2 = function(candidates, target) {
    let result=[]
    let n=candidates.length
    let arr=candidates.sort((a,b)=>a-b)
    function generateAll(index,sum,path){
        console.log("inde",index,"sum",sum,"path",path)
       
       if(sum==target){
          result.push([...path])
          console.log("result",result)
       }
       for(var i=index;i<arr.length;i++){

          if(i>index && arr[i]===arr[i-1]){
            console.log("check",i,index)
               continue
          }
          if(sum+arr[i]>target){
           break;
          }
          path.push(arr[i])
          generateAll(i+1,sum+arr[i],path)
          path.pop()

       }
       

    }
    generateAll(0,0,[])
    console.log("result",result)
    return result
   

};