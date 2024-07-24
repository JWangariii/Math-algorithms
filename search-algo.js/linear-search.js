// complexity : O(n)
// given ana array of elements n and target element t,
// find the index of t in the array
// return -1 if element is not found

// arr = the array, target = the target value
function linearSearch(arr, target) {
  // looping thru the entire array
  for (let i = 0; i < arr.length; i++) {
    // returning index if element is found
    if (arr[i] === target) {
      return i;
    }
  }
  // if element isn't found
  return -1;
}

console.log(linearSearch[(-5, 2, 10, 4, 6)], 10);
console.log(linearSearch[(-5, 2, 10, 4, 6)], 6);
console.log(linearSearch[(-5, 2, 10, 4, 6)], 20);
