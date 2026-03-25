// BEGIN
export default function getSameParity(arr) {
  if (arr.length === 0) {
    return [];
  }
  let first = Math.abs(arr[0]) % 2 === 0;
  let result = [];
  for (const i of arr) {
    if ((Math.abs(i) % 2 === 0) === first) {
      result.push(i);
    }
  }
  return result;
}

// END