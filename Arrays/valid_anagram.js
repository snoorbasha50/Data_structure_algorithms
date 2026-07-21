// 242. Valid Anagram
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.



// solution space is o(n) and time is o(n)
 var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false
    }
    let map1=new Map()
    let map2=new Map()
    for(const str of s){
        if(map1.has(str)){
            map1.set(str,(map1.get(str)||0)+1)
        }else{
            map1.set(str,1)
        }

    }
    for(const str of t){
        if(map2.has(str)){
            map2.set(str,(map2.get(str)||0)+1)
        }else{
            map2.set(str,1)
        }

    }
 

    for(const [key,value] of map1){
        console.log("key",key,value)
        if(map2.get(key)!==value){
            return false
        }
    }
    return true
};


var Anagram=function(s,t){
    if(s.length!==t.length){
        return false
    }
    let count=new Array(26).fill(0)
    for(const ch of s){
        count[ch.charCodeAt(0)-'a'.charCodeAt(0)]++;
    }
    for(const ch of t){
        count[ch.charCodeAt(0)-'a'.charCodeAt(0)]--;
    }
    for(const num of count){
        if(num>0){
            return false
        }
    }
    return true

}

