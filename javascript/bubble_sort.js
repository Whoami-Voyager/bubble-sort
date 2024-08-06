function bubbleSort(arr) {
  if (2 > arr.length) {
    return arr
  }

  const bubble = []
  for (const int of arr) {
    const indx = arr.indexOf(int)
    if (int > arr[indx + 1]) {
      console.log(int)
    }
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

// If the array is empty or has 1 item, it returns the inputted array
// Iteraties through the array, and if the previous value is smaller than the current value, it shifts it higher in the index of the array