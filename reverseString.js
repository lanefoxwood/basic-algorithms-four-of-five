function reverseString(str) {
    const strArr = [...str];
    let reversed = strArr.reverse();
    reversed.toString();
    return reversed.join('')
  }
  
  reverseString("hello");

  /*Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.*/