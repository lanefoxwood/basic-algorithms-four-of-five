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

// adding logic comments

// this function should accept a string, and it should return a string that has the first letter of each word in uppercase, and the rest of the word is lower case. Even if the word is one character, the word should be capitalized. 

//So im thinking that I could use the toUpperCase() method here...
// but generally speaking I need to take the whole string I receive and standardize it to lowercase first, just to make it easier.

// TODO: i need to define this function which accepts a string:
function titleCase(string){
  // TODO: inside this function i need to do the following:
  //TODO 1. take the string and make a lowercase copy of it, saving it to a variable called lowerCaseString.
  //TODO 2. select or separate each word into its own array element. 
      // well, a word is a string of characters. the first letter of any word is usually preceeded by a space unless it's the first word in a sentence. maybe a simple way to get all of the words separated from eachother is to use the .split(' ') method and save them into an array, called lowerCaseArray.
  //TODO: 2.5. in prep for the loop, i want to initialize an empty array called upperCaseArray = [], which will hold our elements with upperCased first letters.
  //TODO 3. i need to loop over the lowerCaseArray, a for...of loop can work.
      // inside this for...of loop, i need to do the following:
          //TODO 1. access the first index of the current element, using something like element[0]
          //TODO: 2. reassign the value of element[0] by making it the uppercase version of itself, using the .toUpperCase() method, like this: element[0] = element[0].toUpperCase().
          // that ensures that the first letter of the element is uppercase and updated.
          //TODO: 3. i need to push each updated element into a new array, called upperCaseArray. so maybe i should initialize it as an empty array outside of the for...of loop? see TODO 2.5...
          //TODO: 4. before the loop exits i need to push the now modified element onto the upperCaseArray by upperCaseArray.push(element)
          //the loop continues for every element of lowerCaseArray, and exits when done.
  //TODO: 4. now that I have my upperCaseArray, i need to turn it back into a string, using the .join(" ") method. I can save this new string in a variable called titleCasedString, like this:
  // const titleCasedString = upperCaseArray.join(" ").
  //tODO: 5. return the string titleCasedString as a resutl of running the function.
};



//==============================================================================

//honestly, the .split() and .join() methods are so useful here... but I wonder if there is another way, a better way, to do this without turning the string into an array and back again? 

// the .replace() method comes to mind... but i have another idea...
// lets try the exmaple string, "just eat grapes"

/* 
  take the original input string and just send it toLowerCase() like this for simplifying our life:

  string = string.toLowerCase();

  what if we just prcoess the sentence in slices, starting from the string index of 0 up to, but not including the index where string.indexOf(' '), like this:

  let placeholderWord = string.slice(0,string.indexOf(' ')+1)

  let nextStartPoint = placeholderWord.length
       placeholderWord.length in this first iteration is: 5

  this should return the first whole word in the string plus the empty space behind it if there is one. because I can take a slice by counting starting from the 0th index, "j" up to but not including the indexOf the first ' ' space character, "t" but + 1 means i grab that space character too,  " "

  have to capitalize the first letter by replacing "j" with "J", by reassigning the value to the uppercased version of itself.:

  placeholderWord.replace(0, placeholderWord[0].toUpperCase())

  so the slice we've just taken is now "Just " and now we simply concat it to a variable, placeholderString, which is initialized as empty '' before we start this little loop. 

  let placeholderString = '', then:

  placeholderString.concat(placeholderWord). 

  then the loop continues on...
  */

  // sooo, let's try this logic. i need to define a function:

///////////// ==============================================\\\\\\\\\\\\\\\\\\\
//SOOOO basically there is the potential for an infinite loop here, so this giant section of code is broken at the moment until the loop parameters are adjusted.  Overall, the logic is just flawed. but it was fun to try to think through. 

  function titleCaseAString(string){
      // inside this function i need to do the following:
      //TODO 1. define all of my initial variables and placeholder things, such as placeholderString = '', 
      let placeholderString = '';
      //TODO 2. take the input string and reassign it to string.toLowerCase()
      string = string.toLowerCase();
      //TODO 3. I need a for loop. this for loop needs to be defined to start at 0 and end at i < string.length. it needs an incrementer variable, i, to be redefined BEFORE the next iteration, which is initialized inside the loop. it keeps track of the length of the current slice and sets i to that number.
      for(let i=0;i<string.length; i){
           // inside of this loop i need to do the following:
          //TODO 1. initialize an empty incrementer variable, called nextStartPoint = 0;
          let nextStartPoint = 0
          //TODO 2. take the slice and set it to placeholderWord variable
          let placeholderWord = string.slice(0,string.indexOf(' ')+1)
          //TODO 3. update the value of nextStartPoint to: placeholderWord.length
          nextStartPoint = placeholderWord.length
          // TODO 4. now capitalize the first letter of the placeholderWord
          placeholderWord.replace(0, placeholderWord[0].toUpperCase())
          //TODO 5. now concat placeholderWord to the end of placeholderString.
          placeholderString.concat(placeholderWord)
          //TODO 5. set i = nextStartPoint ... automatically done by the for loop i think
          let i = nextStartPoint
      }
      //TODO 4. i need to return the string placeholderString as a result of running this function. 
      const titleCasedSentence = placeholderString
      return console.log(titleCasedSentence)
  };
titleCaseAString("happy birthday");


