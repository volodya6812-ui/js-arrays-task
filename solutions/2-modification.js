// BEGIN
export function swap(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
}

// END