function maxProduct () {
    arr =[ 2, 1, 5, 0, 4, 3];
    // Sort the array in descending order
    arr.sort((a, b) => b - a);
    return arr[0] * arr[1];
  }

  console.log(maxProduct());