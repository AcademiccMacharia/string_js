function reverseWords(str) {
    if (typeof str !== "string") {
      return "It must be a string.";
    }
    
    return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
  }
  
  console.log(reverseWords("abc"));
  console.log(reverseWords("JavaSipt Exercises"));
  console.log(reverseWords(1234));
  