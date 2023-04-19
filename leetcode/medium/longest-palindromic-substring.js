/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let str="";

  for(let i=0;i<s.length;i++){
      for(let j=0;j<2;j++){
          let left=i;
          let right=left+j;
          while(s[left]&&s[left]===s[right]){
              left--;
              right++;
          }
          if(right-left-1>str.length){
              str=s.slice(left+1,right);
          }
      }
  }
  return str;
};