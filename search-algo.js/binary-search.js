// 't' in the array.return -1 if not found
// find middle element,if target is = to middle elemt,return inndex of missle element
// if target is less than middle, serach left half of array
// if greater vice versa
// complexity : O(logn)

// given a sorted array of 'n' elements and a target  element 't', find the index of
// array = the sorted arr, trget = the target element in arr
function binarySearch(arr, target) {
  // rep index of 1st element
  let leftIndex = 0;
  // rep index of last element
  let rightIndex = arr.length - 1;
  // repeat  this as long as arr is not empty
  while (leftIndex <= rightIndex) {
    // find middle number
    // in each iteration find the middle elemnt
    // Math.floor is used to get lower integer value incase there's uneven number of values in array
    let middleIndex = Math.floor(leftIndex + rightIndex) / 2;
    // check if target = to middle element
    if (target === arr[middleIndex]) {
      // if so return middle element
      return middleIndex;
    }
    // if we should go right or left in the array
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));
