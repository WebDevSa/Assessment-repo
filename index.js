// Q2) Given an array of strings strs, group the anagrams together. You can return the answer in any order.//

function anaGrams(strs){

  let newAnagrams = {};

  for( let word of strs) {
      let  sortedWord = word.split('').sort().join('');
      if( newAnagrams[sortedWord]){
          newAnagrams[sortedWord].push(word);
      }
      else{
        newAnagrams[sortedWord] = [word];
      }
  }
  return Object.values(newAnagrams);
}


console.log(anaGrams(["eat","tea","tan","ate","nat","bat"]))

console.log(anaGrams([""]))

console.log(anaGrams(["a"]))


//Q1) Write a function that takes an integer 'x'(greater than 0) as input and returns a new integerformed by reversing the digits of 'x' without using any built-in methods for reversal. Afterreversing the digits, determine whether the resulting number has any prime factors. If it doeshave prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."//

function checkPrime(x){
  
    // writing a closure here//

    function changeInteger(num){
        let changed = 0;
        for( let temp = num; temp>0; temp=Math.floor(temp/10)){
            changed = changed * 10 + (temp%10);
        }
        return changed;
    }

    function isPrime(num){
        return num <=1 ? false : num <= 3 ? true : num % 2 === 0 || num % 3 === 0 ? false : (() => {
        for( let i=5; i* i <= num; i += 6){
            if(num){

            }
        }
        })
    }
}

console.log(checkPrime(123))

//Q3) Given a string s and a array of strings wordArray, return true if s can be segmented into aspace-separated sequence of one or more array words.//

function checkBreak(s, wordArray){
    const wordsarrSet = new Set(wordArray);
    const checkTechnique = new Array(s.length + 1).fill(false);
    checkTechnique[0]=true;

    //nested loop//
   for(let j=1; j<= s.length; j++){
    for(let i=j-1; i>=0; i--){
        if(checkTechnique[i] && wordsarrSet.has(s.substring(i,j))){
            checkTechnique[j]=true;
            break;
        }
    }

   }
   return checkTechnique[s.length]
}


console.log(checkBreak("leetcode",["leet","code"]));

console.log(checkBreak("applepenapple",["apple","pen"]));

console.log(checkBreak("catsandog",["cats","dog","sand","and","cat"]));

