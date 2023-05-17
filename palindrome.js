//function to check whether a given string is a palindrome

function palindrome(str) {
    // Good luck!
    var str1 = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var str2 = str1.split('').reverse().join('');
    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
    }

console.log(palindrome("killik"));