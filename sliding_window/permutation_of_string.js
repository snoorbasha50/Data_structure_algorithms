// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.



/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map1=new Map()
    let map2=new Map()
    for(const s of s1){
        map1.set(s,(map1.get(s)||0)+1)
    }
    let left=0
    for(let right=0;right<s2.length;right++){
        map2.set(s2[right],(map2.get(s2[right])||0)+1)
         if(right-left+1>s1.length){
            map2.set(s2[left],map2.get(s2[left])-1)
            if(map2.get(s2[left])==0){
                map2.delete(s2[left])
            }
            left++;
         }
        if(checkTwoMapsAreEqual(map1,map2)){
            return true
        }
    }
    return false
};

function checkTwoMapsAreEqual(map1,map2){
     if(map1.size!==map2.size){
        return false
     }
     for(const[key,value] of map1){
        if(map2.get(key)!==value){
            return false
        }
     }
     return true
}