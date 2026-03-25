const _ = require("lodash"); 

// BEGIN
export default function getSameCount(arr1, arr2) {
  const unique1 = [];
  for (let i = 0; i < arr1.length; i++) {
    const current = arr1[i];
    let alreadyExists = false;
    for (let j = 0; j < unique1.length; j++) {
      if (unique1[j] === current) {
        alreadyExists = true;
        break;
      }
    }
    if (!alreadyExists) {
      unique1.push(current);
    }
  }

  let count = 0;
  for (let i = 0; i < unique1.length; i++) {
    const value = unique1[i];
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === value) {
        count++;
        break; 
      }
    }
  }

  return count;
}
// END