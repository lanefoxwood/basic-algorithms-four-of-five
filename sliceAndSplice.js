function frankenSplice(arr1, arr2, n) {
    let copy = arr2.slice();
    copy.splice(n,0,...arr1);
    return copy;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

/*Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

*/

//add comments to demonstrate logic process

// this function should accept two arrays as arguments as well as an index number, and it should return one array. Copy the first array into the second array, in order. Begin inserting elements at the index number given. returning the resulting array should not alter the original arrays in any way. 


//TODO: i need a function

function frankenSplice(array1, array2, indexNumber){
  // inside this function i need to do the following:
  //TODO: 1. first make a copy of both arrays, and assign them to the variable array2Copy and array1Copy using the slice() method.
  //TODO: 2. then splice copy1 into copy2 using the index number as the starting point.
  //TODO: 3. save/return the new resulting array as a variable called frankenArray as a result of running this function. 
};