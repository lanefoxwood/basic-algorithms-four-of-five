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

// inserting comments which demonstrate the logic process
//this function should take any string of any length and put the letters in reverse order, and the resulting output must be a string. 


//TODO: is there a math formula for reversing a string? No..


// TODO: define this function:

function reverseString(string) {
  //TODO: inside of this function I need to:
  //TODO: 1. accept a string as an input
  // TODO: 2. make an empty array and call it stringArrayReversed
  //TODO: 3. make a copy of the string and turn it into an array, called stringCopyArray.
  //TODO: 4. then have a for loop.
  // TODO: inside the for loop, this is what needs to happen:
      // 1. select the first letter of tringCopyArray using its index,
      // 2. adds that value to the beginning of stringArrayReversed with the unshift method
      // 3. the loop is over when the value of i = stringCopyArray.length - 1, written in the for loop as for(let i = 0; i < stringCopyArray.length; i++){}

  //TODO: 5. after the for loop we have a completed array filled with values, stringArrayReversed.
  //TODO: 6. the function needs to now join the characters of the array back togther with no spaces, using the stringArrayReversed.join(',').
  //TODO: 7. save the resulting string to a variable, stringReversed;
  //TODO: 8. return the value stringReversed at the end of the function.
// ======================================================================================


}





//BONUS: attempt tp cast any input received to a string, and catch errors, OR write an if statement to check the value of the input to make sure it's a srting. typeCheck.



  //TODO: how would you go about reversing this string: "CAT"?
  // 0. I was taught that every string is just a series of characters, separated by '' empty string character. It would make life easier if I could just break  up   the string into a list of these characters, separated by a comma and numbered with an index...
  // 1. once i have my list of characters, I need to make a copy of it so I can compare the two. because a reversed list will have all the same characters as the first list, but in the opposite order - thast's how we can tell if it's been successfully reversed. I need to compare it to the original for index order and matching.
  // let stringCopyArray = string.split('');
  // 2. I need to select the first letter of stringCopyArray with stringCopyArray[0]
      // i essentially need to loop over each value, and have the index of each value as well, so I can use a for loop such as: 
  // for(let i = 0; i < stringCopyArray.length; i++){}
  // 3. I need to make a new array, stringArrayReversed, and put the selected value at the beginning of the array:
  // for example, I select 'C' then put it at the beggining, then select 'A' and put it at the beggining of the array, before 'C', then select 'T' and put it at the beginning of the array, before 'A'... I can put a value at the beginning of an array by using .unshift()

  //4. once the loop is done, we should have an array, stringArrayReversed, which now needs to be converted back into a string using the stringArrayReversed.join(','),
  // 5. i need to save that to a variable, stringReversed.
  //6. I need to return stringReversed as a result of the function.
