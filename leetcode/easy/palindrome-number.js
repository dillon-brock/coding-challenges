// Given an integer x, write a function that returns true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    let numArr = x.toString().split('');
    let reverseArr = x.toString().split('').reverse();
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] !== reverseArr[i]) return false;
    }
    return true;
};