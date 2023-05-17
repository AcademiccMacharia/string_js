
function isAnagram(str1, str2) {
    str1 = str1.toLowerCase().replace(/\s/g, '');
    str2 = str2.toLowerCase().replace(/\s/g, '');
  
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Sort the characters of both strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  console.log(isAnagram('hwllo', 'olleh'));