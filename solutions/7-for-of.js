// BEGIN
export default function calculateAverage(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum / arr.length;
  }
}
// END