function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
        .join(' ');
  }
  
  titleCase("I'm a little tea pot");
/*Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
0. call toLowerCase() to sanitize the input
1. call split() to make a new array of each word, separated at each white space char;
2. call .charAt(0) to select the first index position of the word, replace it with the same char.toUpperCase(), map each val in th array;
3. call .join and separate each array value with white space.

what if you did toUpperCase(), the sliced the end off, sent the emnd to l;pwercase, then concat them back together...
*/