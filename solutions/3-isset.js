// BEGIN
export function get(arr, index, defaultValue = null) {
  let result;
  if (index >= 0 && index < arr.length) {
    return arr[index];
  } else {
    return defaultValue;
  }
}

// END