// 394. Decode String
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

 

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
 

// Constraints:

// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].



var decodeString = function(s) {
    let stack=[]
    let currentNumber=0
    let currentString=""
    let numbers=[1,2,3,4,5,6,7,8,9]
    for(const char of s){
        if (char >= '0' && char <= '9'){
            currentNumber=currentNumber*10+Number(char)
        }
        else if(char==="["){
          stack.push([currentNumber,currentString])
          currentNumber=""
          currentString=""
        }
        else if(char===']'){
          const[previousNumber,string]=stack.pop()
          let repetaedStr=currentString.repeat(previousNumber)
          currentString=string+repetaedStr

        }else{
            currentString=currentString+char
        }
    }
    return currentString
};